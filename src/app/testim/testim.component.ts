import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testim',
  templateUrl: './testim.component.html',
  styleUrls: ['./testim.component.css']
})
export class TestimComponent implements OnInit {
 
 idx=0;
 a=10000
 
  constructor() { }


  ngOnInit(): void {
  this.updateTestimonial();
   setInterval(()=> { this.updateTestimonial() },this.a);

  }
 
 updateTestimonial(){
 debugger
 
 const testimonial = document.querySelector('.testimonial')
 const userImage = <HTMLImageElement>document.querySelector('.user-image')
 const username = document.querySelector('.username')




 const testimonials: {  name: string,photo:string,text:string }[] = [
  {
    name: 'Asma',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "Their Product are the best,and their service after buy are also.",
  },
  {
    name: 'Najoua',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Très bel investissement avec leurs produits! Répond à tous les critères et encore mieux en vrai ! La qualité  est top ! Il sont à la hauteur !'
,
  },
  {
    name: 'Salma',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      " Acheter pour les cours (je travaille en collège) j hésitais à reprendre un pc portable.. Et bien je ne regrette pas.Aunomie,rapidité, utilisation facile et intuitive, programmes gratuits dispo.Tout me convient parfaitement"
,

  },
  {
    name: 'Rania',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Article au top. Bon rapport qualité-prix. Conforme à mes attentes. Je le recommande vivement.",
  },
  {
    name: 'Mohamed',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Before i go for it, i read the reviews just few people were not happy, i have mcbook pro 2019 and fits perfectly it is worth of money as it shows everything so clear like there is nothing.",
  },
  {
    name: 'Asma',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Le prix de cette pc est vraiment intéressant. La pc est assez réactive avec le lancement des applications. L’autonomie à été largement améliorée.',
  },
 
]
   const { name,  photo, text } = testimonials[this.idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
console.log(this.idx)
  this.idx++

  if (this.idx === testimonials.length ) {
   this.idx = 0
  }
  
}

 }


  


