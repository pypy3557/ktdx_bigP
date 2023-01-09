//모달1을 페이지 로딩시 몇초 뒤 띄워줌
setTimeout(function() { modalOn();}, 4000);
//모달2을 페이지 로딩시 몇초 뒤 띄워줌
setTimeout(function() {modalOn2();}, 9000);
//모달1을 시간이 지나면 자동으로 숨김 1000초가 1초
setTimeout(function() { modalOff();}, 8500);

//모달2을 시간이 지나면 자동으로 숨김 1000초가 1초
setTimeout(function() { modalOff2();}, 15000);



{
    var modal = document.getElementById("modal")

    function modalOn() {
        modal.style.display = "flex"
    }
    function isModalOn() {
        return modal.style.display === "flex"
    }
    function modalOff() {
        modal.style.display = "none"
    }
    // const btnModal = document.getElementById("btn-modal")
    // btnModal.addEventListener("click", e => {
    //     modalOn()
    // })
    var closeBtn = modal.querySelector(".close-area")
    closeBtn.addEventListener("click", e => {
        modalOff()
    })
    modal.addEventListener("click", e => {
        const evTarget = e.target
        if(evTarget.classList.contains("modal-overlay")) {
            modalOff()
        }
    })
    window.addEventListener("keyup", e => {
        if(isModalOn() && e.key === "Escape") {
            modalOff()
        }
    })
}
//modal2

var alert = document.getElementById("alert")
function modalOn2() {
    alert.style.display = "flex"
}

function isModalOn2() {
    return alert.style.display === "flex"
}
function modalOff2() {
    alert.style.display = "none"
}
// const btnModal2 = document.getElementById("btn-alert")
// btnModal2.addEventListener("click", e => {
//     modalOn2()
// })
// const closeBtn2 = modal2.querySelector(".close-area2")
// closeBtn2.addEventListener("click", e => {
//     modalOff2()
// })
// modal2.addEventListener("click", e => {
//     const evTarget2 = e.target
//     if(evTarget2.classList.contains("alert-overlay2")) {
//         modalOff2()
//     }
// })
// window.addEventListener("keyup", e => {
//     if(isModalOn2() && e.key === "Escape2") {
//         modalOff2()
//     }
// })


function func1(){
    var r = confirm('신호 변경하시겠습니까??');//r은 변수
    console.log(r);//변수 r에 저장된 값을 콘솔에 출력
    if(r == true){
        alert("변경이 완료되었습니다..");
        window.open('tables.html');
        window.location.reload(true);
        
    }
    else{
        alert("변경을 취소하였습니다.");

    }
}

function func_modal(){
    var r = alert('신호 변경이 완료되었습니다!');//r은 변수
    console.log(r);//변수 r에 저장된 값을 콘솔에 출력
    window.open('tables_badtra.html');
    window.location.reload(true);
}