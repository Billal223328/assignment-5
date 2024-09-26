document.getElementById('donate-money')
    .addEventListener('click', function(event){
    event.preventDefault();
    
       
       
       
    const addMoney=getInputFieldValueById('input-amount');
        document.getElementById('input-amount').value='';
    if(addMoney>0){
        const currentBalance=getTextFieldValueById('current-balance');
        const balance=addMoney + currentBalance;
        document.getElementById('current-balance').innerText=balance;
    }
        
        if(isNaN(addMoney) || addMoney<0){
            alert('Faild to add money')
        }

    
            const redusingMoney=getTextFieldValueById('redusing-money');
            const amount=addMoney - redusingMoney;
            document.getElementById('redusing-money').innerText=amount;
         
  
    })
    document.getElementById('donate-money1')
    .addEventListener('click', function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('input-amount1');
    document.getElementById('input-amount1').value='';
    if(addMoney>0){
        const currentBalance=getTextFieldValueById('current-balance1');
        const balance=addMoney + currentBalance;
        document.getElementById('current-balance1').innerText=balance;
    }
    
    if(isNaN(addMoney) || addMoney<0){
        alert('Faild to add money')
    }

    const redusingMoney=getTextFieldValueById('redusing-money');
    const amount=addMoney - redusingMoney;
    document.getElementById('redusing-money').innerText=amount;
 
    })