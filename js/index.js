const weekSub = [0, 1.7, 1.6, 1.5, 1.4, 1.3, 1.2, 1.1, 1, 0.9, 0.9, 0.8, 0.8, 0.8, 0.3, 0.2];
const monthSub = [1.5, 1.4, 1.3, 1.2, 1.1, 1, 0.9, 0.9, 0.8, 0.8, 0.8, 0.8, 0.3, 0.2];
const oneTimeSub = [1.4, 1.3, 1.2, 1, 1, 0.9, 0.8, 0.7, 0.6, 0.6, 0.6, 0.6, 0.6, 0.3, 0.2];

// const rawDate = new Date();
// const month = rawDate.getMonth();
// const year = rawDate.getFullYear();
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function getCostWeek(cost) {
    if (cost <= 1000 && cost <= 2999) {
        return weekSub[1]
    }
    if (cost <= 3000 && cost <= 4999) {
        return weekSub[2]
    }
    if (cost <= 5000 && cost <= 9999) {
        return weekSub[3]
    }
    if (cost <= 10000 && cost <= 19999) {
        return weekSub[4]
    }
    if (cost <= 20000 && cost <= 29999) {
        return weekSub[5]
    }
    if (cost <= 30000 && cost <= 39999) {
        return weekSub[6]
    }
    if (cost <= 40000 && cost <= 49999) {
        return weekSub[7]
    }
    if (cost <= 50000 && cost <= 59999) {
        return weekSub[8]
    }
    if (cost <= 60000 && cost <= 69999) {
        return weekSub[9]
    }
    if (cost <= 70000 && cost <= 79999) {
        return weekSub[10]
    }
    if (cost <= 80000 && cost <= 89999) {
        return weekSub[11]
    }
    if (cost <= 90000 && cost <= 99999) {
        return weekSub[12]
    }
    if (cost <= 100000 && cost <= 499999) {
        return weekSub[13]
    }
    if (cost <= 500000 && cost <= 999999) {
        return weekSub[14]
    }
    if (cost <= 1000000) {
        return weekSub[15]
    }
}

// TODO
function getCostMonth(cost) {
    if (cost <= 1000 && cost <= 2999) {
        return monthSub[1]
    }
    if (cost <= 3000 && cost <= 4999) {
        return monthSub[2]
    }
    if (cost <= 5000 && cost <= 9999) {
        return monthSub[3]
    }
    if (cost <= 10000 && cost <= 19999) {
        return monthSub[4]
    }
    if (cost <= 20000 && cost <= 29999) {
        return monthSub[5]
    }
    if (cost <= 30000 && cost <= 39999) {
        return monthSub[6]
    }
    if (cost <= 40000 && cost <= 49999) {
        return monthSub[7]
    }
    if (cost <= 50000 && cost <= 59999) {
        return monthSub[8]
    }
    if (cost <= 60000 && cost <= 69999) {
        return monthSub[9]
    }
    if (cost <= 70000 && cost <= 79999) {
        return monthSub[10]
    }
    if (cost <= 80000 && cost <= 89999) {
        return monthSub[11]
    }
    if (cost <= 90000 && cost <= 99999) {
        return monthSub[12]
    }
    if (cost <= 100000 && cost <= 499999) {
        return monthSub[13]
    }
    if (cost <= 500000 && cost <= 999999) {
        return monthSub[14]
    }
    if (cost <= 1000000) {
        return monthSub[15]
    }
}

// TODO
function getOneTimeCost(cost) {
    if (cost <= 1000 && cost <= 2999) {
        return oneTimeSub[1]
    }
    if (cost <= 3000 && cost <= 4999) {
        return oneTimeSub[2]
    }
    if (cost <= 5000 && cost <= 9999) {
        return oneTimeSub[3]
    }
    if (cost <= 10000 && cost <= 19999) {
        return oneTimeSub[4]
    }
    if (cost <= 20000 && cost <= 29999) {
        return oneTimeSub[5]
    }
    if (cost <= 30000 && cost <= 39999) {
        return oneTimeSub[6]
    }
    if (cost <= 40000 && cost <= 49999) {
        return oneTimeSub[7]
    }
    if (cost <= 50000 && cost <= 59999) {
        return oneTimeSub[8]
    }
    if (cost <= 60000 && cost <= 69999) {
        return oneTimeSub[9]
    }
    if (cost <= 70000 && cost <= 79999) {
        return oneTimeSub[10]
    }
    if (cost <= 80000 && cost <= 89999) {
        return oneTimeSub[11]
    }
    if (cost <= 90000 && cost <= 99999) {
        return oneTimeSub[12]
    }
    if (cost <= 100000 && cost <= 499999) {
        return oneTimeSub[13]
    }
    if (cost <= 500000 && cost <= 999999) {
        return oneTimeSub[14]
    }
    if (cost <= 1000000) {
        return oneTimeSub[15]
    }
}

// 1)Кол-во контактов в день = кол-во операторов * кол-во звонков в день
function dayContacts(operators, dayCalls) {
   return operators * dayCalls;
}

// 2)Кол-во контактов в неделю = кол-во операторов * кол-во звонков в день * кол-во рабочих дней в неделю(В ЗАВИСИМОСТИ ОТ ВЫСТАВЛЕННОГО ГРАФИКА РАБОТЫ)
function weekContacts(operators, dayCalls, schedule) {
    return operators * dayCalls * schedule;
}

function monthContacts(operators, dayCalls, schedule) {
    return operators * dayCalls * schedule;
}

// 3)Стоимость недельной подписки = кол-во контактов в неделю * стоимость

function weekSubCost(operators, dayCalls, schedule, contactsAll) {
    return weekContacts(operators, dayCalls, schedule) * getCostWeek(contactsAll);
}

function monthSubCost(operators, dayCalls, schedule, contactsAll) {
    return weekContacts(operators, dayCalls, schedule) * getCostMonth(contactsAll);
}

function oneTimeSubCost(contactsAll) {
    return contactsAll * getOneTimeCost(contactsAll);
}

function remove() {
    document.getElementById("schedule").style.visibility = "hidden";
    document.getElementById("operatorNumber").style.visibility = "hidden";
    document.getElementById("callNumber").style.visibility = "hidden";
    document.getElementById("contactNumber").style.visibility = "visible";
    document.getElementById("sumDay").innerText="";
    document.getElementById("sumWeek").innerText="";
    document.getElementById("sumMonth").innerText="";
    document.getElementById('operators').value="";
    document.getElementById('phoneCalls').value="";
}

function show() {
    document.getElementById("schedule").style.visibility = "visible";
    document.getElementById("operatorNumber").style.visibility = "visible";
    document.getElementById("callNumber").style.visibility = "visible";
    document.getElementById("contactNumber").style.visibility = "hidden";
    document.getElementById('totalContacts').value = "";
    document.getElementById("sumDay").innerText="";
    document.getElementById("sumWeek").innerText="";
    document.getElementById("sumMonth").innerText="";
}

function getPricing() {
    const business = document.getElementById('business').value; // Тип базы
    const totalContacts = document.getElementById('totalContacts').valueAsNumber; // Количество контактов:
    const scheduleMonth = document.getElementById('duration').value.split(" ")[1];
    const scheduleWeek = document.getElementById('duration').value.split(" ")[0]; // График:

    const operators = document.getElementById('operators').valueAsNumber; // Количество операторов:
    const dayCalls = document.getElementById('phoneCalls').valueAsNumber; // Количество звонков в день:

    if (isNaN(operators) || isNaN(dayCalls)) {
        document.getElementById("sumDay").innerText=`Стоимость базы: ${oneTimeSubCost(totalContacts)}`;
    } else {
        document.getElementById("sumDay").innerText=`Контактов в день: ${dayContacts(operators, dayCalls)}`;
        document.getElementById("sumWeek").innerText=`Контактов в неделю: ${weekContacts(operators, dayCalls, scheduleWeek)}`;
        document.getElementById("sumMonth").innerText=`Контактов в месяц: ${monthContacts(operators, dayCalls, scheduleMonth)}`;
    }
}


