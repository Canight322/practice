function openPopup() {
    let className = document.getElementById('classname').value;
    let duration = document.getElementById('duration').value;
    let price = document.getElementById('price').value;
    var e = document.getElementById('state');
    let state = e.options[e.selectedIndex].text;
    if (className === ''||duration===''||price==='') {
        const fail = document.querySelector('.fail');
        fail.classList.add('active');
        console.log("信息填写不完整，提交失败！");
    }
    else {
        const success = document.querySelector('.success');
        success.classList.add('active');
        console.log("课程详情");
        console.log("课时名称:" + className);
        console.log("课时:" + duration);
        console.log("价格（元）:" + price);
        console.log("课程状态:" + state);
    }
}
function closeSuccess() {
    const popup = document.querySelector('.success');
    popup.classList.remove('active');
    const inputs =document.querySelectorAll('#classname,#duration,#price');
    inputs.forEach(input=>{
        input.value='';
    });
    
}
function closeFail() {
    const popup = document.querySelector('.fail');
    popup.classList.remove('active');
}
