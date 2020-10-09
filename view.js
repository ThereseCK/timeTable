function show(){
    let includeEvent = event => model.selectedModule === null
    || event.module === model.selectedModule;
let selectedEvents = model.events.filter(includeEvent);

    document.getElementById('mainContent').innerHTML = `

    <table> 
    <tr>
        <th> </th>
        ${model.days.map(d=> `
        <th>${d}</th>`).join('')}
    </tr>
    ${createHtmlForTimeSlot(0, selectedEvents)}
    <tr class="pause"> 
        <th  > 11.30 - 12.15 </th>
        <th class="pause" colspan="5"> FELLES PAUSE </th>
    </tr>
    ${createHtmlForTimeSlot(1, selectedEvents)}
   
   
    <tr class="pause"> 
        <th> 14.45 - 15.00 </th>
        <th colspan="5" style="color: green; text-decoration: underline; font-size: small;"> Oppsummering og avslutning i team
        <br>Har alle deltatt aktivt?
       <br> Hvem har spurt? Hvem har hjulpet? Har dere henta hjelp på utsida teamet?
       <br> Har dere klart å følge planen vår? Hvis ikke, hva er grunnen? Må dere endre noe? Hva har dere lært av det? Ting å tenke på til morgen?
        <br>Hva er dere fornøyd med? Hva vil dere evt endre. 
       <br> Individuell loggføring
        
        <br> Fredag er det frivillig Kahoot 14:45</th>
    </tr>
</table>
`;
}

function createHtmlForTimeSlot(timeSlot, events) {
    const dayNos = Array.from(model.days.keys());
    return `
        <tr><th>${model.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
        `
            <td>
                <ul>
                    ${eventsFromDayAndTime(dayNo, timeSlot, events).map(event => `
                    <strong>${event.module}</strong>
                   
                   
                        ${event.name} <strong style="color:grey;">${event.teachers.join(', ')}</strong>  
                    <br><br>
                    `).join('')}
                </ul>
            </td>`).join('')}
            </tr>`;
}

function eventsFromDayAndTime(dayNo, timeSlot, events) {
    return events.filter(
        event => event.time.day === dayNo && event.time.timeSlot === timeSlot
    );
}