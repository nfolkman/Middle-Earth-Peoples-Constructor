class Humanoids {
      constructor(people,language,realm,abilities){
          this._people = people
                          this._language = language
          this._realm = realm
          this._abilities = abilities
      }
              get people(){
                          return this._people;
              }
      get language(){
          return this._language;
      }
      get realm(){
          return this._realm;
      }
      get abilities(){
          return this._abilities;
      }
  }
  
  class Humans extends Humanoids{
        constructor(people,language,realm,abilities){
                    super(people)
                    this._language = language
                    this._realm = realm
                    this._abilities = abilities
        }
        get language(){
                    return this._language
        }
        get realm(){
                    return this._realm
        }
        get abilities(){
                    return this._abilities
        }
        fight(){
                    console.log(`${this._people} engage in battle!`)
        }
  }
  
  class Elves extends Humanoids{
        constructor(people,language,realm,abilities){
                    super(people)
                    this._language = language
                    this._realm = realm
                    this._abilities = abilities
        }
        get language(){
                    return this._language
        }
        get realm(){
                    return this._realm
        }
        get abilities(){
                    return this._abilities
        }
        fight(){
                    console.log(`${this._people} engage in battle!`)
        }
  }
  
  let gondor = new Humans('The People of Gondor','Westron (Common Tongue) & Sindarin','Northwest','Extraordinary Knowledge of Stonemasonry & Battle acumen')
  let dunedain = new Humans('The Descendants of Numenor','Westron (Common Tongue), Sindarin, & Quenya', 'Arnor & Gondor','Extraordinarily Long Life, Nobility of Spirit & Body')
  let silvan = new Elves('The Elves of the Woodland Realm','Nandorin/Silvan','Mirkwood & Lorien','Highly Skilled in Combat & Agile')
  
  let middleEarth = [gondor,dunedain,silvan]
  
  for( a of middleEarth ){
              a.fight();
  }
  
  console.log(middleEarth)
  
  