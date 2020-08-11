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
        <th> 11.30 - 12.15 </th>
        <th colspan="5"> FELLES PAUSE </th>
    </tr>
    ${createHtmlForTimeSlot(1, selectedEvents)}
   
    ${createHtmlForTimeSlot(2, selectedEvents)}
    <tr class="pause"> 
        <th> 14.40 - 15.00 </th>
        <th colspan="5"> Oppsummering og avslutning i team der alle deler det viktigste de har lært. Individuell oppsummering med egen logg til slutt
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
                   
                    <li>
                        ${event.name} <strong style="color:grey;"><br>${event.teachers.join(', ')}</strong>  
                    </li><br>
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