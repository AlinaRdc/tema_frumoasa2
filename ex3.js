let dog ={
    nume: 'Rudy',
    rasa:'Husky',
    culoare: 'silver-gray',
    anulNasterii: 2021,
    vaccin: ['Jigodia' , 'Parvoviroza canina' , 'Leptospiroza'],
    arePasaport: true,
    calculeazaVarsta: function(){
        this.varsta = 2022 - this.anulNasterii;
        return this.varsta;
       },
    afiseaza: function(){
        console.log(`Nume: ${this.nume}`);
        console.log(`Rasa: ${this.rasa}`);
        console.log(`Culoare balanii: ${this.culoare}`);
        console.log(`Varsta: ${this.calculeazaVarsta()} an`);
        console.log(`Detine un pasaport: ${this.arePasaport ?'da': 'nu'}`);
        if(this.arePasaport == true){    
            console.log('Rudy are voie sa iasa din Moldova');
           } else{
            console.log('Rudy nu are voie sa iasa din Moldova :(');
           }
        }
    }   
dog.afiseaza();
dog.calculeazaVarsta();
dog.vaccin.push('Hepatita canina');
console.log(`Vaccinuri: ${dog.vaccin}`);
  

if(dog.vaccin.length != 0){
    console.log(`${dog.vaccin[0]}:'01.03.2021`);
    console.log(`${dog.vaccin[1]}:'04.09.2021`);
    console.log(`${dog.vaccin[2]}:02.02.2022`);
    console.log(`${dog.vaccin[3]}:'10.07.2022`);
} else{
    console.log('Rudy nu a facut niciun vaccin pana acum');
}