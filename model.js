const model={
    selectedModule: 'Modul 1',
    days: ['MANDAG <br> <p style="color: red; font-size:x-small">12.15-13.15 <br> JETLAG møte </p> ',
     'TIRSDAG<br><p style="color: red; font-size:x-small;"> 12-15-14.45<br> Joakim Egentid</p>',
      'ONSDAG <br><p style="color: red; font-size:x-small"> 12-15-14.45 <br> J L T Egentid </p>', 
      'TORSDAG <br> <p style="color: red; font-size:x-small"> GET Plandag </p>', 
      'FREDAG<br><p style="color: red; font-size:x-small"> 12-15-14.45 <br>Therese Egentid </p>'],
    timeSlots: ['09.00 - 11.30', '12.15 - 14.45', ],
    menuOptions: [
        {value: null, txt: 'Alle Modulene'},
        {value: 'Modul 1', txt: 'Modul 1'},
        {value: 'Modul 2', txt: 'Modul 2'},
        {value: 'Modul 3', txt: 'Modul 3'},
        {value: 'GET IT', txt: 'GET IT'},
    ],

    events: [

        // MODUL 1 _ MANDAG
        {
            name: '<div style="color: purple;"> 09.00 -  09.30 <br>Chorei + NK i team  <br> 09.30 - 10.30 <br> MorraMøte + Sette opp Ukeplan i Team</div>',
            time: {
                day: 0,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Joakim'],
           
        },
        {
            name: '<div style="color: purple;">14.00- 14.45 <br> TeamProsjekt Fremføring i General Voice</div>',
            time: {
                day: 0,
                timeSlot: 1
            },

            module: 'Modul 1',
            teachers: ['Joakim']
        },
       
        
        // MODUL 2 MANDAG
        {
            name: '<div style="color: blue;"> 09.00 -  09.30 <br>Chorei + NK i team  <br> 09.30 - 10.30 <br> MorraMøte + Sette opp Ukeplan i Team</div>',
            time: {
                day: 0,
                timeSlot: 0
            },

            module: 'Modul 2',
            teachers: ['Therese']
        },
        // {
        //     name: '<div style="color: blue;"> DERE VELGER </div>',
            
        //     time: {
        //         day: 0,
        //         timeSlot: 1
        //     },

        //     module: 'Modul 2',
        //     teachers: ['Therese er tilgjengelig for spm']
        // },  
       
              // MODUL 3 MANDAG
        {
            name: '<div style="color: fuchsia;"> 09.00 -  09.30 <br>Chorei + NK i team  <br> 09.30 - 10.30 <br> MorraMøte + Sette opp Ukeplan i Team</div>',
            time: {
                day: 0,
                timeSlot: 0
            },

            module: 'Modul 3',
            teachers: ['Linn']
        },
        // {
        //     name: '<div>  </div>',
        //     time: {
        //         day: 0,
        //         timeSlot: 1
        //     },

        //     module: 'Modul 3',
        //     teachers: ['Linn']
        // },
       
        // MODUL 1 - Tirsdag

{
            name: '<div style="color: purple;"> 09.00 - 9.30 : Chorei <br> Morramøte <br> 10.00 - 11.30 TerjeTime </div>',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Joakim']
        },
        // {
        //     name: '<div> </div>',
        //     time: {
        //         day: 1,
        //         timeSlot: 1
        //     },

        //     module: 'Modul 1',
        //     teachers: [' ']
        // },
       

        // MODUL 2 - Tirsdag
        {
            name: '<div style="color: blue;"> 09.00 - 09.30: Chorei <br> Morramøte  </div>',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Modul 2',
            teachers: ['Therese']
        },
        // {
        //     name: '<div style="color: blue;"> </div>',
        //     time: {
        //         day: 1,
        //         timeSlot: 1
        //     },

        //     module: 'Modul 2',
        //     teachers: ['Therese']
        // },  

        // MODUL 3- Tirsdag
        {
            name: '<div style="color: fuchsia;"> 09.00 - 09.30: Chorei <br> Morramøte  </div>',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Modul 3',
            teachers: ['Linn']
        },
        {
            name: '<div style="color: fuchsia;"> 12.15 - 13.45 <br> TerjeTime <br> <br> 13.45 - 14.45 <br> CodeReview</div>',
            time: {
                day: 1,
                timeSlot: 1
            },

            module: 'Modul 3',
            teachers: ['Linn']
        },
       

 // MODUL 1 - Onsdag

 {
    name: '<div style="color: purple;"> 09.00 - 09.40: Chorei  + Gjest <br> Morramøte  </div>',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'Modul 1',
    teachers: ['Joakim']
},
// {
//     name: '<div> </div>',
//     time: {
//         day: 2,
//         timeSlot: 1
//     },

//     module: 'Modul 1',
//     teachers: [' ']
// },


// MODUL 2 - onsdag
{
    name: '<div style="color: blue;"> 09.00 - 09.40: Chorei  + Gjest <br> Morramøte  </div>',
    
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'Modul 2',
    teachers: ['Therese']
},
// {
//     name: '<div> </div>',
//     time: {
//         day: 2,
//         timeSlot: 1
//     },

//     module: 'Modul 2',
//     teachers: [' ']
// },  


// MODUL 3- Onsdag
{
    name: '<div style="color: fuchsia;"> 09.00 - 09.40: Chorei  + Gjest <br> Morramøte  </div>',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'Modul 3',
    teachers: ['Linn ']
},
// {
//     name: '<div> </div>',
//     time: {
//         day: 2,
//         timeSlot: 1
//     },

//     module: 'Modul 3',
//     teachers: [' ']
// },

        // MODUL 1 - Torsdag

        {
            name: '<div style="color: purple;"> 09.00: Morramøte <br><br> 11.00 - 11.30: Codealong</div>',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Joakim, Therese/Linn']
        },
        // {
        //     name: '<div> </div>',
        //     time: {
        //         day: 3,
        //         timeSlot: 1
        //     },

        //     module: 'Modul 1',
        //     teachers: ['Joakim']
        // },
      
        // MODUL 2 - Torsdag
        {
            name: '<div style="color: blue;"> 09.00: Morramøte  </div>',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Modul 2',
            teachers: ['Therese']
        },
        // {
        //     name: '<div> </div>',

        //     time: {
        //         day: 3,
        //         timeSlot: 1
        //     },

        //     module: 'Modul 2',
        //     teachers: ['Therese']
        // },  
     

        // MODUL 3- Torsdag
        {
            name: '<div style="color: fuchsia;"> 09.00: Morramøte  </div>',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Modul 3',
            teachers: ['Linn']
        },
        // {
        //     name: '<div></div>',
        //     time: {
        //         day: 3,
        //         timeSlot: 1
        //     },

        //     module: 'Modul 3',
        //     teachers: ['Linn']
        // },
      
           // MODUL 1 - Fredag

{
    name: '<div style="color: purple;"> 09.00 - 09.15: Chorei <br> MorgenMøte <br> 11.00 OUT Kommer</div>',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 1',
    teachers: ['Joakim']
},
{
    name: '<div style="color: purple;"> 12.15 - 13.15 <br> Oppsumering av uka <br> 14.45: frivillig Kahoot</div>',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 1',
    teachers: ['Joakim']
},


// MODUL 2 - Fredag
{
    name: '<div style="color: blue;"> 09.00 - 09.15: Chorei <br> MorgenMøte <br> 09.45- 10.30 <br> Oppsumering av prosjekt </div>',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 2',
    teachers: ['Therese']
},
{
    name: '<div style="color: blue;"> 14.45: Frivillig Kahoot</div>',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 2',
    teachers: [' ']
},  


// MODUL 3- Fredag
{
    name: '<div style="color: fuchsia;"> 09.00 - 09.15: Chorei <br> MorgenMøte <br> 10.00- 11.30 <br> Terjetime</div>',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 3',
    teachers: ['Linn']
},
{
    name: '<div style="color: fuchsia;"> 13.30- OUT Kommer <br> 14.00: Oppsumering av uka <br> 14.45: frivillig kahoot </div>',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 3',
    teachers: ['Linn']
},

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