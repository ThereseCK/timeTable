const model={
    selectedModule: 'Modul 1',
    days: ['Mandag <br> Alle: Chorei og NK i team', 'Tirsdag <br> Alle: Chorei og NK inviduelt ', 'Onsdag <br> Alle: Chorei + Gjest', 'Torsdag <br> Ingen Chorei', 'Fredag <br> Alle: Chorei og NK'],
    timeSlots: ['09.00 - 11.30', '12.15 - 13.15', '13.15 - 14.40', ],
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
            name: '<div> 10.15 - 11.30 <br> Kodetime + 15 min refleksonstid </div>',
            nickName: 'KT',
            time: {
                day: 0,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Terje', 'Therese']
        },
        {
            name: '<div> Fokusert Jobbing alene eller i team</div>',
            nickName: 'FJ',
            time: {
                day: 0,
                timeSlot: 1
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },
        {
            name: '<div> Fokusert Jobbing alene eller i team</div>',
            nickName: 'FJ',
            time: {
                day: 0,
                timeSlot: 2
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },
        
        // MODUL 2 MANDAG
        {
            name: '<div> 10.15 - 11.30 <br> MorgenMøte & <br> Fokusert Jobbing </div>',
            nickName: 'MM + FJ',
            time: {
                day: 0,
                timeSlot: 0
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },
        {
            name: '<div>  Fokusert Jobbing alene eller i team</div>',
            nickName: 'FJ',
            time: {
                day: 0,
                timeSlot: 1
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },  
        {
            name: '<div>  Fokusert Jobbing alene eller i team </div>',
            nickName: 'FJ',
            time: {
                day: 0,
                timeSlot: 2
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },
              // MODUL 3 MANDAG
        {
            name: '<div> 10.15 - 11.30 <br> MorgenMøte & <br> Fokusert Jobbing </div>',
            nickName: 'MM + FJ',
            time: {
                day: 0,
                timeSlot: 0
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },
        {
            name: '<div> Fokusert Jobbing alene eller i team  </div>',
            nickName: 'FJ',
            time: {
                day: 0,
                timeSlot: 1
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },
        {
            name: '<div> Parprogrammering med mulighet for hjelp</div>',
            nickName: 'PP',
            time: {
                day: 0,
                timeSlot: 2
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },

        // MODUL 1 - Tirsdag

{
            name: '<div> 09.30 - 11.30 <br> MorgenMøte i Team </div>',
            nickName: 'MM',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },
        {
            name: '<div> Fokusert Jobbing alene eller i team</div>',
            nickName: 'FJ',
            time: {
                day: 1,
                timeSlot: 1
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },
        {
            name: '<div> Team-programmering </div>',
            nickName: 'TEAMPRG',
            time: {
                day: 1,
                timeSlot: 2
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },

        // MODUL 2 - Tirsdag
        {
            name: '<div> 09.30 - 11.30 <br> MorgenMøte & <br> Prosjekt Jobbing </div>',
            nickName: 'MM + PJ',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },
        {
            name: '<div>  Prosjekt Jobbing</div>',
            nickName: 'PJ',
            time: {
                day: 1,
                timeSlot: 1
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },  
        {
            name: '<div>  Prosjekt Jobbing </div>',
            nickName: 'PJ',
            time: {
                day: 1,
                timeSlot: 2
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },

        // MODUL 3- Tirsdag
        {
            name: '<div> 09.30 - 11.30 <br> Kodetime <br> 15 min refleksjon </div>',
            nickName: 'KT',
            time: {
                day: 1,
                timeSlot: 0
            },

            module: 'Modul 3',
            teachers: ['Terje', 'Joakim']
        },
        {
            name: '<div> ParProgrammering </div>',
            nickName: 'PP',
            time: {
                day: 1,
                timeSlot: 1
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },
        {
            name: '<div> Fokusert Jobbing</div>',
            nickName: 'FJ',
            time: {
                day: 1,
                timeSlot: 2
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },

 // MODUL 1 - Onsdag

 {
    name: '<div> 09.45 - 11.30 <br> MorgenMøte i Team  og fokusert jobbing</div>',
    nickName: 'MM + FJ',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'Modul 1',
    teachers: []
},
{
    name: '<div> Fokusert Jobbing alene eller i team</div>',
    nickName: 'FJ',
    time: {
        day: 2,
        timeSlot: 1
    },

    module: 'Modul 1',
    teachers: []
},
{
    name: '<div> Team-programmering </div>',
    nickName: 'TEAMPRG',
    time: {
        day: 2,
        timeSlot: 2
    },

    module: 'Modul 1',
    teachers: []
},

// MODUL 2 - onsdag
{
    name: '<div> 09.45 - 11.30 <br> MorgenMøte & <br> Prosjekt Jobbing </div>',
    nickName: 'MM + PJ',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'Modul 2',
    teachers: []
},
{
    name: '<div>  Prosjekt Jobbing</div>',
    nickName: 'PJ',
    time: {
        day: 2,
        timeSlot: 1
    },

    module: 'Modul 2',
    teachers: []
},  
{
    name: '<div>  Prosjekt Jobbing </div>',
    nickName: 'PJ',
    time: {
        day: 2,
        timeSlot: 2
    },

    module: 'Modul 2',
    teachers: []
},

// MODUL 3- Onsdag
{
    name: '<div> 09.45 - 11.30 <br> MorgenMøte i Team og Fokusert Jobbing</div>',
    nickName: 'MM + FJ',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'Modul 3',
    teachers: []
},
{
    name: '<div> Codereview </div>',
    nickName: 'CR',
    time: {
        day: 2,
        timeSlot: 1
    },

    module: 'Modul 3',
    teachers: []
},
{
    name: '<div> Fokusert Jobbing</div>',
    nickName: 'FJ',
    time: {
        day: 2,
        timeSlot: 2
    },

    module: 'Modul 3',
    teachers: []
},
        // MODUL 1 - Torsdag

        {
            name: '<div> 09.00 - 11.30 <br> MorgenMøte i Team <br> Fokusert Jobbing</div>',
            nickName: 'MM + FJ',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },
        {
            name: '<div> Fokusert Jobbing alene eller i team</div>',
            nickName: 'FJ',
            time: {
                day: 3,
                timeSlot: 1
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },
        {
            name: '<div>Fokusert Jobbing alene eller i team </div>',
            nickName: 'FJ',
            time: {
                day: 3,
                timeSlot: 2
            },

            module: 'Modul 1',
            teachers: ['Therese']
        },

        // MODUL 2 - Torsdag
        {
            name: '<div> 09.00 - 11.30 <br> MorgenMøte i Team <br> Prosjekt Jobbing </div>',
            nickName: 'MM + PJ',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },
        {
            name: '<div>  Prosjekt Jobbing</div>',
            nickName: 'PJ',
            time: {
                day: 3,
                timeSlot: 1
            },

            module: 'Modul 2',
            teachers: ['Linn']
        },  
        {
            name: '<div>  Oppsumering av uka i team</div>',
            nickName: 'OUT',
            time: {
                day: 3,
                timeSlot: 2
            },

            module: 'Modul 2',
            teachers: []
        },

        // MODUL 3- Torsdag
        {
            name: '<div> 09.00 - 11.30 <br> MorgenMøte i Team <br> Fokusert Jobbing </div>',
            nickName: 'MM + FJ',
            time: {
                day: 3,
                timeSlot: 0
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },
        {
            name: '<div> Fokusert Jobbing </div>',
            nickName: 'FJ',
            time: {
                day: 3,
                timeSlot: 1
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },
        {
            name: '<div> Parprogrammering </div>',
            nickName: 'PP',
            time: {
                day: 3,
                timeSlot: 2
            },

            module: 'Modul 3',
            teachers: ['Joakim']
        },

           // MODUL 1 - Fredag

{
    name: '<div> 09.15 - 11.30 <br> MorgenMøte i Team og Fokusert Jobbing</div>',
    nickName: 'MM + FJ',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 1',
    teachers: ['Therese']
},
{
    name: '<div> Oppsumering av uka</div>',
    nickName: 'OUT',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 1',
    teachers: []
},
{
    name: '<div> Fokusert Jobbing</div>',
    nickName: 'FJ',
    time: {
        day: 4,
        timeSlot: 2
    },

    module: 'Modul 1',
    teachers: ['Therese']
},

// MODUL 2 - Fredag
{
    name: '<div> 09.15 - 11.30 <br> MorgenMøte i Team og Fokusert Jobbing </div>',
    nickName: 'MM + FJ',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 2',
    teachers: ['Linn']
},
{
    name: '<div>  Fokusert Jobbing</div>',
    nickName: 'FJ',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 2',
    teachers: ['Linn']
},  
{
    name: '<div> Fokusert Jobbing </div>',
    nickName: 'FJ',
    time: {
        day: 4,
        timeSlot: 2
    },

    module: 'Modul 2',
    teachers: ['Linn']
},

// MODUL 3- Fredag
{
    name: '<div> 09.15 - 11.30 <br> Kodetime <br> 15 min refleksjon </div>',
    nickName: 'KT',
    time: {
        day: 4,
        timeSlot: 0
    },

    module: 'Modul 3',
    teachers: ['Terje', 'Joakim']
},
{
    name: '<div> Fokusert Jobbing </div>',
    nickName: 'FJ',
    time: {
        day: 4,
        timeSlot: 1
    },

    module: 'Modul 3',
    teachers: ['Joakim']
},
{
    name: '<div> Oppsumering av uka i team</div>',
    nickName: 'OUT',
    time: {
        day: 4,
        timeSlot: 2
    },

    module: 'Modul 3',
    teachers: []
},
// GET IT
{
    name: '<div> NØKKELKOMPETANSE </div>',
    nickName: 'NK',
    time: {
        day: 2,
        timeSlot: 0
    },

    module: 'GET IT',
    teachers: []
},
{
    name: '<div>Codereview </div>',
    nickName: 'FJ',
    time: {
        day: 2,
        timeSlot: 1
    },

    module: 'GET IT',
    teachers: []
},
{
    name: '<div> Fokusert Jobbing</div>',
    nickName: 'FJ',
    time: {
        day: 2,
        timeSlot: 2
    },

    module: 'GET IT',
    teachers: []
},

    ]
}