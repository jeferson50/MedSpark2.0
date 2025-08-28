function calculateBalance(){
let total=0
const rows=document.querySelectorAll('tbody tr')
rows.forEach(row=>{
const amountText=row.children[2].textContent.trim()
const amount=parseFloat(amountText.replace('$','').replace('-',''))
if(amountText.includes('-')){total-=amount}else{total+=amount}
})
const balanceElement=document.querySelector('.text-2xl.text-green-600')
balanceElement.style.transition='transform 0.3s ease'
balanceElement.style.transform='scale(1.1)'
setTimeout(()=>{balanceElement.style.transform='scale(1)'},300)
balanceElement.textContent=`$${total.toFixed(2)}`
}
 
calculateBalance()
 
function filterTransactions(type){
const rows=document.querySelectorAll('tbody tr')
rows.forEach(row=>{
const description=row.children[1].textContent.toLowerCase()
if(type==='all'){row.style.display=''}
else if(type==='refund'&&description.includes('reimbursement')){row.style.display=''}
else if(type==='purchase'&&description.includes('purchase')){row.style.display=''}
else{row.style.display='none'}
})
}
 
function addTransaction(){
const table=document.querySelector('tbody')
const newRow=document.createElement('tr')
newRow.className='border-b'
newRow.innerHTML=`
<td class="py-2">${new Date().toLocaleDateString()}</td>
<td>Reimbursement from the health clinic</td>
<td>$100.00</td>
<td><span class="text-green-600 font-medium">Completed</span></td>
`
table.appendChild(newRow)
calculateBalance()
}
 
const addButton=document.createElement('button')
addButton.textContent='Add transaction'
addButton.className='px-4 py-2 bg-purple-500 text-white rounded mt-4'
addButton.onclick=addTransaction
document.querySelector('main').appendChild(addButton)