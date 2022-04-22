const explorers = [
    {
      name: "Saul Larios",
      exercises_completed: 10,
      rate: 99,
      city: "GDL",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Luis Felipe",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Gabo Gabin",
      exercises_completed: 3,
      city: "CDMX",
      rate: 100,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
   ]
   
   explorers.forEach(explorers => console.log(explorers.name))
   //Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   explorers.forEach(explorers => console.log(explorers.stack))
   //Imprime el stack de cada explorer, usa FOR EACH
   const newList = explorers.map(function(explorers){ return explorers.stack})
   console.log(newList)
   //Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   const explorersJs = explorers.filter((explorers) =>
   explorers.stack.includes('js'))
   console.log(explorersJs)
   //Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
   const explorer_CITY = explorers.find((explorers) => explorers.city == "CDMX")
   console.log(explorer_CITY.name + " Es de " + explorer_CITY.city)
   //Busca el primer explorer que sea de la CDMX, usa FIND
   const sum_exercises_completed = explorers.reduce((acc, explorers) => acc + explorers.exercises_completed, 0)
   console.log(sum_exercises_completed)
   //Obtén la suma de todos los exercises_completed, usa REDUCE
   const areSomeTrue = explorers.some((b) =>  b.missions.frontend.isFinished === true)
   console.log("Alguno de los Explorers tiene exercisesFinished en frontend " + areSomeTrue)
   //Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
   const areAllTrue = explorers.every((b) =>  b.missions.frontend.isFinished === true)
   console.log("Todos los Explorers tienen exercisesFinished en frontend " + areAllTrue)
   //Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.