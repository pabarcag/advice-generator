const $idText = document.querySelector('.card__id-edit');
const $adviceText = document.querySelector('.card__advice');


async function getAdvices () {
    try {
        let res = await fetch("https://api.adviceslip.com/advice", {cache: 'no-store'});
        let json = await res.json();
        $idText.textContent = `#${json.slip.id}`;
        $adviceText.textContent = `${json.slip.advice}`;
        if(!res.ok) throw {status: res.status, statusText: res.statusText};
    } catch (error) {
       console.log(error.statusText || 'Ocurrio un error');
    }
}


document.addEventListener('click', async (e)=>{
    if(e.target.matches('.card__button') || e.target.matches('.card__icon')){
        getAdvices();
    }
});



