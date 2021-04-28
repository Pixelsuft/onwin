var container = document.getElementById('machines_cont');
var oses = [
    ['Windows 1.01', 'win101', 'hda=win101&cdb=none&seavgabios=true&autostart=yes'],
    ['Windows 3.1 RU', 'win310_ru', 'hda=win310_ru&cdb=none&autostart=yes'],
    ['Windows NT 4.0 + self virtualization', 'winnt', 'hda=winnt&cdb=none&seavgabios=true&winnt=yes&autostart=yes'],
    ['Windows NT 4.0 RU', 'winnt_ru', 'hda=winnt_ru&cdb=none&seavgabios=true&winnt=yes&autostart=yes'],
    ['Windows 95 RU', 'win95_ru', 'hda=win95_ru&seavgabios=true&cdb=none&autostart=yes'],
    ['Windows 95 RU (SVGA)', 'win95_ru_svga', 'hda=win95_ru_svga&cdb=none&autostart=yes'],
    ['Windows XP RU', 'winxp_ru', 'hda=winxp_ru&cdb=none&autostart=yes'],
    ['Upload your own disk image', 'own', 'own=true']
    
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
    run_btn.id = i;
    run_btn.addEventListener('click', function(e){
        var new_href='emulator.html';
        new_href += '?' + oses[e.srcElement.id][2];
        location.href=new_href;
    });
    card_flex.appendChild(run_btn);
    card_body.appendChild(card_text);
    card_body.appendChild(card_flex);
    card_mb4.appendChild(card_body);
}