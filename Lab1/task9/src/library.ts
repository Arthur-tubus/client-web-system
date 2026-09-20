interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
  
    borrow(): void;
}

class Book implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public pageCount: number 
    ) {}

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`Книга "${this.title}" вже видана!`);
        } else {
            this.isBorrowed = true;
            console.log(`Книгу "${this.title}" успішно позичено.`);
        }
    }
}

class Magazine implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`Журнал "${this.title}" (Випуск №${this.issueNumber}) вже позичено!`);
        } else {
            this.isBorrowed = true;
            console.log(`Журнал "${this.title}" (Випуск №${this.issueNumber}) успішно позичено.`);
        }
    }
}

class DVD implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string, 
        public duration: number 
    ) {}

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`DVD "${this.title}" вже позичено!`);
        } else {
            this.isBorrowed = true;
            console.log(`DVD "${this.title}" успішно позичено.`);
        }
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано до бібліотеки: "${item.title}" (${item.author})`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(
            (item) => item.title.toLowerCase() === name.toLowerCase()
        );
    }

    listAvailableItems(): void {
        console.log("\n================ ДОСТУПНІ ЕЛЕМЕНТИ В БІБЛІОТЕЦІ ================");
        const availableItems = this.items.filter((item) => !item.isBorrowed);

        if (availableItems.length === 0) {
            console.log("Усі елементи зараз позичені або бібліотека порожня.");
            return;
        }

        availableItems.forEach((item) => {
            let details = "";
            if (item instanceof Book) {
                details = `[Книга] ${item.pageCount} стор.`;
            } else if (item instanceof Magazine) {
                details = `[Журнал] Випуск №${item.issueNumber}`;
            } else if (item instanceof DVD) {
                details = `[DVD] Тривалість: ${item.duration} хв.`;
            }

            console.log(`- "${item.title}" | Автор/Режисер: ${item.author} | ${details}`);
        });
        console.log("=================================================================\n");
    }
}


const myLibrary = new Library();

console.log("--- Наповнення бібліотеки ---");
const book1 = new Book("Чистий код", "Роберт Мартін", 464);
const magazine1 = new Magazine("National Geographic", "Редакція NG", 2024);
const dvd1 = new DVD("Inception", "Крістофер Нолан", 148);

myLibrary.addItem(book1);
myLibrary.addItem(magazine1);
myLibrary.addItem(dvd1);

myLibrary.listAvailableItems();

console.log("--- Видача матеріалів ---");
const foundItem = myLibrary.findItemByName("Inception");
if (foundItem) {
  foundItem.borrow();
}

dvd1.borrow();

myLibrary.listAvailableItems();