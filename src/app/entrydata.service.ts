import { Injectable } from '@angular/core';
import { Entry, MonthInfo } from './definitions';
import { AuthenticatorService } from './authenticator.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EntrydataService {

    constructor(
        private authenticator: AuthenticatorService,
        private http: HttpClient,
    ) {
        this.authenticator.auth().then(async () => {
            this.categories = await this.getCategories();
        });

    }

    data: {
        date: Date,
        categories: {
            entries: Entry[],
            category: string,
        }[],
    }[] = [];
    categories: string[] = [];

    async update(year: number, month: number) {
        this.updateCalendar(year, month);
        this.updateMonthInfo();
    }

    async updateCalendar(year: number, month: number) {
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
            params: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
            }
        }).toPromise())['categories'];
    }

    

    async getEntries(year: number, month: number): Promise<Entry[]> {
        return <Entry[]>(await this.http.get('/api/v1/entry', {
            params: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
                year: String(year),
                month: String(month),
            },
        }).toPromise());
    }

    async removeEntry(entry: Entry) {
        return (await this.http.delete('/api/v1/entry', {
            params: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
                id: String(entry.id)
            },
        }).toPromise());
    }

    async getUserName(userId): Promise<string> {
        return <string>(await this.http.get('/api/v1/username', {
            params: {
                userName: this.authenticator.userName,
                sessionId: this.authenticator.sessionId,
                userId: userId
            },
        }).toPromise());
    }

    year: number = new Date().getFullYear();
    month: number = new Date().getMonth() + 1;
    currentMonth: MonthInfo;
    prevMonth: MonthInfo;

    async getMonthInfo(year: number, month: number): Promise<MonthInfo> {
        const res = await this.authenticator.httpRequest('get', '/api/v1/month', null, {
            year: String(year),
            month: String(month)
        });
        return {
            average: Math.floor(res['avg']) || 0,
            sum: res['sum'] || 0,
            count: res['count'] || 0,
            month, year,
            categories: res['categories']
        }
    }

    async updateMonthInfo() {
        this.authenticator.auth().then(async () => {
            this.currentMonth = await this.getMonthInfo(this.year, this.month);
            var prev_m, prev_y;
            if (this.month == 1) {
                prev_y = this.year - 1;
                prev_m = 12;
            } else {
                prev_y = this.year;
                prev_m = this.month - 1;
            }
            this.prevMonth = await this.getMonthInfo(prev_y, prev_m);
        }).catch(() => { });
    }


    async postEntry(data: {
        date: number,
        price: number,
        title: string,
        category: string,
    }) {
        return this.authenticator.httpRequest('post', '/api/v1/entry', data);
    }
}
