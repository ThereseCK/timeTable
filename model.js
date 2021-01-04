const model={
    selectedModule: 'Alle',
    days: ['MANDAG <br> <p style="color: red; font-size:small">10.30-11.30: JETLAG møte <br> 12-15-14.45: Therese Egentid </p>  ',
     'TIRSDAG<br>',
      'ONSDAG <br><p style="color: red; font-size:small"> 12-15-14.45:  J L T Egentid </p>', 
      'TORSDAG <br> <p style="color: red; font-size:small"> GET Plandag </p>', 
      'FREDAG<br><p style="color: red; font-size:small"> 12-15-14.45: Joakim Egentid </p>'],
    timeSlots: ['09.00 - 11.30', '12.15 - 14.45', ],
    menuOptions: [
        {value: null, txt: 'Alle Modulene'},
        {value: 'Modul 1', txt: 'Modul 1'},
        {value: 'Modul 2', txt: 'Modul 2'},
        {value: 'Modul 3', txt: 'Modul 3'},
        {value: 'GET IT', txt: 'GET IT'},
    ],

    events: [

        //  MANDAG
        {
            name: '<div style="color: pink;"> 09.00 -  09.30 <br>Chorei + NK i team  <br><br> 09.30 - 10.30 <br> MorraMøte + Sette opp Ukeplan i Team</div>',
            time: {
                day: 0,
                timeSlot: 0
            },

            module: 'Alle',
            teachers: ['Tilgjengelig: ', 'Linn', 'Joakim', 'Therese'],
           
        },
        {
            name: '<div style="color: purple;">14.00- 14.45 <br> TeamProsjekt Fremføring i General Voice</div>',
            time: {
                day: 0,
                timeSlot: 1
            },

            module: 'Modul 1',
            teachers: ['Linn'],
        },
       
        
      
       
       //Tirsdag
        {
            name: '<div style="color: pink;"> 09.00 - 09.30: Chorei <br> Morramøte  </div>',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Alle',
            teachers: ['']
        },
     
{
            name: '<div style="color: purple;">  10.00 - 11.30 TerjeTime </div>',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Linn', 'Joakim/Therese']
        },
     
    
      
      
        {
            name: '<div style="color: fuchsia;"> 12.15 - 13.45 <br> TerjeTime </div>',
            time: {
                day: 1,
                timeSlot: 1
            },

            module: 'Modul 3',
            teachers: ['Therese', 'Joakim']
        },
        {
            name: '<div style="color: fuchsia;"> 13.45 - 14.45 <br> CodeReview</div>',
            time: {
                day: 1,
                timeSlot: 1
            },

            module: 'Modul 3',
            teachers: ['Therese']
        },
       

 // - Onsdag

 {
    name: '<div style="color: pink;"> 09.00 - 09.40: Chorei  + Gjest <br> Morramøte  </div>',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'Alle',
    teachers:  ['Tilgjengelig: ', 'Linn', 'Joakim', 'Therese']
},


        //  Torsdag

        {
            name: '<div style="color: pink;"> 09.00: Morramøte </div>',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Alle',
            teachers:  [ 'Linn', 'Joakim', 'Therese']
        },
        {
            name: '<div style="color: purple;"> 11.00 - 11.30: Codealong</div>',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Linn, Therese/Joakim']
        },



     //Fredag


{
    name: '<div style="color: purple;"> 12.15 - 13.15 <br> Oppsumering av uka </div>',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 1',
    teachers: ['Linn']
},


// MODUL 2 - Fredag
{
    name: '<div style="color: pink;"> 09.00 - 09.15: Chorei <br> MorgenMøte  </div>',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Alle',
    teachers: [],
},
{
    name: '<div style="color: blue;">  09.45- 10.30 <br> Oppsumering av prosjekt </div>',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 2',
    teachers: ['Joakim']
},
{
    name: '<div style="color: fuchsia;"> 10.00- 11.30 <br> Terjetime</div>',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 3',
    teachers: ['Therese', 'Linn']
},
{
    name: '<div style="color: fuchsia;"> 13.30-  <br> Oppsumering av uka  </div>',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 3',
    teachers: ['Therese']
},

{
    name: '<div style="color: pink;"> 14.45: Frivillig Kahoot</div>',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Alle',
    teachers: [' ']
},  


// MODUL 3- Fredag

// GET IT
{
    name: '<div style="color: green;"> NØKKELKOMPETANSE </div>',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'GET IT',
    teachers: []
},
{
    name: '<div style="color: green;"> NØKKELKOMPETANSE  </div>',

    time: {
        day: 2,
        timeSlot: 1
    },

    module: 'GET IT',
    teachers: []
},


    ]
}