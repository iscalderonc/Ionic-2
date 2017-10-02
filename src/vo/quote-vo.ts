export class QuoteVO {

    constructor(
        private brand: string,
        private model: number,
        private line: string,
        private version: string,
        private city: number,
        private ageDriver: number
        ) {

    }


    public getBrand(){
        return this.brand;
    }

    public getModel(){
        return this.model;
    }

}