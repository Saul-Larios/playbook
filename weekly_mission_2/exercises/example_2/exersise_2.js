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
   explorers.forEach(explorers => console.log(explorers.stack))
   const newList = explorers.map(function(explorers){ return explorers.stack})
   console.log(newList)
   const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
   const explorersJs = explorers.filter((explorers) =>
   explorers.stack.includes('js'))
   console.log(explorersJs)
   const explorer_CITY = explorers.find((explorers) => explorers.city == "CDMX")
   console.log(explorer_CITY.name + " Es de " + explorer_CITY.city)