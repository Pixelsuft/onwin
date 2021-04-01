var container = document.getElementById('machines_cont');
var oses = [
    ['Windows NT 4.0 RU', 'winnt_ru', 'hda=winnt_ru&cdb=none&winnt=yes&autostart=yes'],
    ['Windows 95 RU', 'win95_ru', 'hda=win95_ru&cdb=none&autostart=yes'],
    ['Windows 95 RU (SVGA)', 'win95_ru_svga', 'hda=win95_ru_svga&cdb=none&autostart=yes'],
    
];
for(var i=0;i<oses.length;i++)
{
    var col_md_4 = document.createElement('div');
    col_md_4.className = 'col-md-4';
    container.appendChild(col_md_4);
    var card_mb4 = document.createElement('div');
    card_mb4.className = 'card mb-4 box-shadow';
    col_md_4.appendChild(card_mb4);
    var os_img = document.createElement('img');
    os_img.className = 'card-img-top';
    os_img.src = 'img/' + oses[i][1] + '.png';
    card_mb4.appendChild(os_img);
    var card_body = document.createElement('div');
    card_body.className='card-body';
    var card_text = document.createElement('p');
    card_text.className = 'card-text';
    card_text.innerHTML = oses[i][0];
    var card_flex = document.createElement('div');
    card_flex.className = 'd-flex justify-content-between align-items-center';
    var run_btn = document.createElement('input');
    run_btn.type = 'button';
    run_btn.className = 'btn btn-sm btn-outline-secondary';
    run_btn.value = 'Run!';
    run_btn.id = oses[i][2];
    run_btn.addEventListener('click', function(e){
        console.log(run_btn.id);
        var new_href='emulator.html';
        new_href += '?' + run_btn.id;
        location.href=new_href;
    });
    card_flex.appendChild(run_btn);
    card_body.appendChild(card_text);
    card_body.appendChild(card_flex);
    card_mb4.appendChild(card_body);
}