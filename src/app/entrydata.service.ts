import { Injectable } from '@angular/core';
import { Entry } from './definitions';
import { AuthenticatorService } from './authenticator.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EntrydataService {

    constructor(
        private authenticator: AuthenticatorService,
        private http: HttpClient) { }

    data: {
        date: Date,
        categories: {
            entries: Entry[],
            category: string,
        }[],
    }[] = [];
    categories: string[] = [];

    async update(year: number, month: number) {
        const entries = await this.getEntries(year, month);
        const categories = this.categories = await this.getCategories();
        const first_day = new Date(year, month - 1, 1);
        this.data = [];
        do {
            this.data.push({
                date: new Date(first_day),
                categories: categories.map(c => {
                    return {
                        category: c,
                        entries: entries.filter(e => e.category == c && new Date(e.date).getDate() == first_day.getDate())
                    }
                })
            });
            first_day.setDate(first_day.getDate() + 1);
        } while (first_day.getDate() != 1);
    }


    async getCategories(): Promise<string[]> {
        return <string[]>(await this.http.get('/api/v1/category', {
            headers: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
            }
        }).toPromise())['categories'];
    }

    async getEntries(year: number, month: number): Promise<Entry[]> {
        return <Entry[]>(await this.http.get('/api/v1/entry', {
            params: {
                year: String(year),
                month: String(month)
            },
            headers: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
            }
        }).toPromise());
    }

    async removeEntry(entry: Entry) {
        return (await this.http.delete('/api/v1/entry', {
            params: {
                id: String(entry.id)
            },
            headers: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
            }
        }).toPromise());
    }

    async getUserName(userId): Promise<string> {
        return <string>(await this.http.get('/api/v1/username', {
            params: {
                userId: userId
            },
            headers: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
            }
        }).toPromise());
    }
}
