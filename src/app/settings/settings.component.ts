import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { Entry } from '../definitions';
import { EntrydataService } from '../entrydata.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
        private entrydata: EntrydataService,
        private _snackBar: MatSnackBar,
    ) { }

    ngOnInit(): void {
    }

    download(filename: string, data: any) {
        const link = document.createElement('a');
        const blob = new Blob([data], { type: 'text/plane' });
        const path = URL.createObjectURL(blob);
        if (link.download !== undefined) {
            link.download = filename;
            link.href = path;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(location.origin + path, '_blank');
        }
    }

    async readFile(file: File): Promise<string> {
        return new Promise((res, rej) => {
            const fr = new FileReader();
            fr.readAsText(file, 'utf-8');
            fr.onload = e => {
                res(<string>fr.result);
            }
            fr.onerror = e => {
                rej();
            }
        });
    }

    async exportData() {
        return new Promise((res, rej) => {
            this.http.get('/api/v1/entry/all', {
                params: {
                    userName: this.authenticator.userName,
                    password: this.authenticator.password,
                }
            }).subscribe((response: Entry[]) => {
                this.download('export.json', JSON.stringify(response.map(e => {
                    return {
                        title: e.title,
                        price: e.price,
                        date: e.date,
                        category: e.category,
                        description: e.description,
                    };
                })));
                res();
            }, error => {
                console.log('failed to download data');
                rej();
            });
        });
    }

    async importData(file: File) {
        const entries = JSON.parse(await this.readFile(file));
        for (const entry of entries) {
            const res = await this.entrydata.postEntry(entry)
                .then(() => true).catch(() => false);
            this.openSnackBar(res ?
                'データをインポートしました' :
                'インポートに失敗しました', 'OK');
        }
    }

    @ViewChild('fileInput')
    fileInput;

    file: File | null = null;

    onClickFileInputButton(): void {
        this.fileInput.nativeElement.click();
    }

    async onChangeFileInput() {
        const files: { [key: string]: File } = this.fileInput.nativeElement.files;
        this.file = files[0];
        this.importData(this.file);
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }

}
