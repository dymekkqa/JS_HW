

function check18YearsOld(data) {
    const now = new Date();
    let bdDate = new Date(data);    
    let yearsDifference = now.getFullYear() - bdDate.getFullYear();
    let monthsDifference = now.getMonth() - bdDate.getMonth();    
    
    if (now.getDate() < bdDate.getDate()) {
        monthsDifference--;
    }
    
    if (monthsDifference < 0) {
        yearsDifference--;
        monthsDifference += 12;
    }    
    
    let totalMonths = yearsDifference * 12 + monthsDifference;
    if (totalMonths >= 18 * 12) {
        console.log(`Разница в месяцах: ${totalMonths}`);
    } else {
        console.log('Нужно немного подрасти');
    }
}

check18YearsOld('2000/06/17');
check18YearsOld('2004/07/16');
check18YearsOld('2014/07/16');
