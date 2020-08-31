import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { Entry } from '../definitions';
import { EntrydataService } from '../entrydata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CategorySettingsComponent } from '../category-settings/category-settings.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    constructor(
        private http: HttpClient,
        public authenticator: AuthenticatorService,
        public entrydata: EntrydataService,
        private _snackBar: MatSnackBar,
        private dialog: MatDialog,
    ) { }

    categories: string[] = [];


    ngOnInit(): void {
        this.entrydata.getCategories().then((data) => {
            this.categories = data;
        });
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
        var entries;
        if (file.name.endsWith('.json')) {
            entries = JSON.parse(await this.readFile(file));
        } else if (file.name.endsWith('.csv')) {
            const txt = await this.readFile(file);
            entries = txt.split('\n').slice(1).map(e => {
                const line = e.split(',');
                return {
                    title: line[0],
                    price: line[1],
                    date: line[2],
                    category: line[3],
                    description: line[4],
                };
            });
        } else {
            throw new Error();
        }
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

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.entrydata.categories, event.previousIndex, event.currentIndex);
    }

    openCategorySettings(category: string): void {
        const dialogRef = this.dialog.open(CategorySettingsComponent, {
            width: '300px',
        });

        dialogRef.afterClosed().subscribe(result => { });
    }
}
