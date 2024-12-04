import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id="${employee.id}"
                     data-type="emp"
                >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const employeeClinked=clickEvent.target
        if (employeeClinked.dataset.type === "emp" ){
            const employeeId=parseInt(employeeClinked.dataset.id)
            //const bestEmploy = []
            const orders=getOrders()
            let prodSold=0
            for (const order of orders){

                if (employeeId === order.employeeId){
                prodSold++
                }
          }window.alert(`${employeeClinked.innerText} sold ${prodSold} products`)
        }



    }
)
