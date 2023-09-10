function getTimeCategory() {
    const currentHour = new Date().getHours();
    let currentTimeCategory = "";
    if (currentHour <= 3) {
        currentTimeCategory = "凌晨";
    } else if (currentHour <= 9) {
        currentTimeCategory = "早上";
    } else if (currentHour <= 15) {
        currentTimeCategory = "中午";
    } else if (currentHour <= 18) {
        currentTimeCategory = "下午";
    } else if (currentHour <= 24) {
        currentTimeCategory = "晚上";
    }
    return currentTimeCategory;
}

document.getElementById("time-category").innerText = getTimeCategory();
