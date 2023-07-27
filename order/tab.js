// 获取要操作的元素
const items = document.querySelectorAll('.item');
const cards = document.querySelectorAll('.card');

// 移除选中态
function removeActive() {
    // 移除标签选中态样式
    items.forEach(item => {
        item.classList.remove('active');
    });
    // 移除内容区选中态样式
    cards.forEach(item => {
        item.classList.remove('active');
    });
}

// 遍历所有标签
items.forEach((item, index) => {
    // 为每个标签绑定点击事件
    item.addEventListener('click', function () {
        // 移除选中态样式
        removeActive();
        // 为当前标签添加选中样式
        item.classList.add('active');
        // 为当前内容区添加选中样式
        cards[index].classList.add('active');
    })
})