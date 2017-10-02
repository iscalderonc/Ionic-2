import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import { QuoteVO } from '../vo/quote-vo';

@Injectable()
export class QuoteService {

    constructor(private http:Http){

    }

    getData(user){
        console.log(user);
        let repo = this.http.get(`https://api.github.com/users/${user}/repos`);
            return repo;
    }

    getBrands(){
        let brands : Array<{text: string, value: string}>;
        brands = [
                { text: 'Mazda', value :'mazda'},
                { text: 'Ford', value :'ford'},
                { text: 'Volkswagen', value :'volkswagen'},
                { text: 'Hyundai', value :'hyundai'},
                { text: 'Honda', value :'honda'},
                { text: 'BMW', value :'bmw'}
        ];
        return brands;
    }

    getModels(brand){

        let models : Array<{text: string, value: number}>;

        if(brand == 'mazda'){
            models = [
                { text: '2017', value :2017},
                { text: '2016', value :2016},
                { text: '2015', value :2015},
            ];
        }else{
            models = [
                { text: '2010', value :2010},
                { text: '2009', value :2009},
                { text: '2008', value :2008},
                { text: '2007', value :2007},
                { text: '2006', value :2006},
            ];
        }

        return models;
    }

    getLine(brand,model){

        let lines: Array<{text: string, value: string}>;

        if(brand == 'mazda' && (model >= 2010 && model <= 2016)) {
            lines = [
                { text: 'Mazda 2', value: 'mzd2'},
                { text: 'Mazda 3', value: 'mzd3'},
                { text: 'Mazda 5', value: 'mzd5'},
            ];
        }else if(brand == 'ford' && (model >= 2010 && model <= 2016)){
            lines = [
                { text: 'Fiesta', value :'ft'},
                { text: 'Fussion', value :'fs'},
                { text: 'Focus', value :'fc'},
            ];
        }

        return lines;
    }

    getVersion(brand,model,line){

        let versions: Array<{text: string, value: string}>;

        if(brand == 'mazda' && (model >= 2010 && model <= 2016) && line.indexOf('mzd') != -1){
            versions = [
                { text: 'i', value: 'i'},
                { text: 'i Touring', value: 'iT'},
                { text: 'Gran Touring', value: 'gT'},
            ];
        }else if(brand == 'ford' && (model >= 2010 && model <= 2016) && line.indexOf('fs') != -1){
            versions = [
                { text: 'LT', value :'lt'},
                { text: 'MT', value :'mt'},
                { text: 'ZT', value :'zt'},
            ];
        }

        return versions;
    }

    getCity(){

        let city: Array<{text: string, value: number}>;

        city = [
            { text: 'CDMX', value: 1},
            { text: 'Puebla', value: 2},
            { text: 'Tlaxcala', value: 3},
            { text: 'Oaxaca', value: 4},
        ];

        return city;
    }

    getQuotes(quote: QuoteVO){

        console.log('Service getQuotes-Data: ' + quote.getBrand() + " - " + quote.getModel());

        let quotes: Array<{id: number, image_avatar: string, cost: number, insurance: string, image: string , detail: string , contact_number: string}>;

        quotes = [
            {
                id: 1,
                image_avatar: '../assets/icon/logoQualitas.png',
                cost: 1,
                insurance: 'Qualita',
                image: '../assets/image/qualitas_imagen.jpg',
                detail: 'El seguro cuenta con los siguientes...',
                contact_number: '53-19-71-77'
            },
            {
                id: 2,
                image_avatar: '../assets/icon/logoAguila.png',
                cost: 2,
                insurance: 'El Aguila',
                image: '../assets/image/aguila_image.jpg',
                detail: 'Seguro confortable incluye...',
                contact_number: '17-71-78-79'
            },
        ];

        return quotes;
    }

    getPayments(){

        let payments: Array<{text: string, value: number}>;

        payments = [
            { text: 'Card', value: 1},
            { text: 'Cash', value: 2}
        ];

        return payments;
    }

}


