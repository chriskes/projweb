# Frontend - project web
Auteur: Chris
Frontend 2 repository voor mijn website
### Startniveau Frontend 2 - Rode Piste
Startniveau is iets bovengemiddeld denk ik, dus rode piste. Ik heb als stage ook gewerkt met veel frontend en bij mijn minor virtual reality ook wat geprogrammeerd hier en daar. Natuurlijk als herkanser zijn wat aspecten ook herhaling. Hier tegenover denk ik ook dat ik redelijk wat moet opfrissen en weer een beetje in die developer mindset moet komen. 
### Welke website ga ik maken?
Ik ga de site van MoMA namaken. 
### Responsive of meer aandacht surface
Ik wil in eerste instantie meer leren over fancy animaties en typografie en meer een visuele ervaring maken. Mocht ik nog tijd hebben dan wil ik het zeker graag responsive maken voor een hoger cijfer. 
### Welke pagina's ga ik namaken?
Ik ga de homepagina en de collectie pagina maken. 
### breakdown schets
![website_breakdown](./images/Breakdown.jpg)
![website_breakdown2](./images/breakdown2.png)

## Week 1
#### WG1
Links naar codepen opdrachten: 
Opdracht 1: https://codepen.io/chriskes/pen/KKzyyGp
Opdracht 2: https://codepen.io/chriskes/pen/abNVVQw
## Week 2
#### WG2
Links naar codepen opdrachten: 
Opdracht 1: https://codepen.io/chriskes/pen/PoNEyxm
Opdracht 2: https://codepen.io/chriskes/pen/qBZxrLK?editors=1100
#### WG3
Flexbox Froggy gedaan, laatste level was best lastig. De truc was met flex-wrap, de wrap-reverse te gebruiken. 
```css
flex-flow:column-reverse wrap-reverse;
justify-content:center;
align-content:space-between;
```
## Week 3
#### WG4
Opdracht 1: https://codepen.io/chriskes/pen/qBZyBvG
Opdracht 2: https://codepen.io/chriskes/pen/vYGaYMO
#### WG5 *feedback*
- De header kan geheel met flex-box. Hoe het nu is met "nav-upper" en "nav-lower" zijn niet echt descriptive classes, dus probeer dat te vermijden. Het onderste deel is de header en het deel met de logo en de 2 links kan een section zijn. 
- SVG niet al img's inladen maar echt apart als SVG's kijk of hier tijd voor is anders gebruik .png
- Eerst knopjes werkend van form, en hele nette html. Daarop haal je sneller voldoende.  Beter robuste html form dan fancy vormgegeven. 
- Top button in footer met # easy win interactiehttps://www.w3schools.com/cssref/pr_scroll-behavior.asp > easy win en heel fancy 

## Week 4
Ik wou de 2 adressen met flexbox oplossen zodat er 2 items boven staan en 1 ondergecentreerd. Na wat experimenteren kwam ik er niet echt uit. Ik heb flexy boxes generator gebruikt: https://the-echoplex.net/flexyboxes/. Hier heb ik meegespeeld en gekeken wat wat nou precies doet. Ik heb de eerste 2 items wel moeten definieren met flex-grow en dan een waarde van 1 meegeven. De laatste p item die geef ik een flex-basis van 100% zodat hij de volledige breedte kan innemen. 

Echter als ik dit probeer te implementeren werkt het niet. Ik dacht veel te moeilijk. De items moeten gewoon 50% width zijn, dan breekt de 3e item vanzelf.

## Week 5

Ik zie veel verschillende forms voorbij komen op w3schools, developer.mozilla, w3. Ik ben zelf bij de markup die te vinden is bij CSS-tricks gebleven aangezien dat duidelijk staat afgebeeld. Op basis van deze structuur ga ik mijn forms bouwen in mijn applicatie: https://css-tricks.com/snippets/html/example-form-markup/. 

## Week 6
Om de sticky header te maken heb ik een beetje javascript en css nodig. Ik gebruik de w3schools how to om een begin te maken: https://www.w3schools.com/howto/howto_js_sticky_header.asp. Ik heb eindelijk de sticky header precies gekregen zoals op moma.org. De truc was om de header al fixed te hebben en de main de ruimte van de header naar onder te duwen. Hierdoor wordt de transitie veel geleidelijker en fijner om naar te kijken. Met Js heb ik met hulp van wat bronnen er gerdrag bij het scrollen aan gekoppeld. 

## Week 7
Ik ben aan de slag gegaan met de searchmenu in de header die op magische wijze verschijnt. 

## Bronnen gebruikt 
https://www.w3schools.com/
https://stackoverflow.com/
https://developer.mozilla.org/
https://css-tricks.com/