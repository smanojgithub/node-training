// const customers = [
//   {
//     AccountNo: 1001,
//     Name: "John",
//     City: "Bangalore",
//   },
//   {
//       AccountNo: 1002,
//       Name: "Tom",
//       City: "Mysore",
//     },
//     {
//         AccountNo: 1003,
//         Name: "Kate",
//         City: "Pune",
//     },
//     {
//         AccountNo: 1004,
//         Name: "Tom",
//         City: "Delhi",
//     },
//     {
//       AccountNo: 1005,
//       Name: "Kate",
//       City: "Mumbai",
//     },
// ];
// let isTrue =false;
   
//     function find(){
//         for( i=0;i<customers.length;i++){
//             for(j=i+1;j<customers.length;j++){
//                 if(customers[i].Name === customers[j].Name){
//                     // document.write(customers[i].AccountNo) ;
//                     console.log(customers[i].AccountNo);
//                   isTrue =true;
//                 }
//             }
//             if(isTrue){
//                 break;
//             }   
//         }
//       }  find()


const customers = [
    {
      AccountNo: 1001,
      Name: "John",
      City: "Bangalore",
    },
    {
      AccountNo: 1002,
      Name: "Tom",
      City: "Mysore",
    },
    {
      AccountNo: 1003,
      Name: "Kate",
      City: "Pune",
    },
    {
      AccountNo: 1004,
      Name: "Tom",
      City: "Delhi",
    },
    {
      AccountNo: 1005,
      Name: "Kate",
      City: "Mumbai",
    },
  ];
  
  function findFirstDuplicateAccount() {
    let uniqueCustomers = [];
    let duplicate = {};
    for (let customer of customers) {
      let existingCustomerIndex = uniqueCustomers.findIndex(
        (item) => item.Name === customer.Name
      );
      if (existingCustomerIndex > -1) {
        duplicate = uniqueCustomers[existingCustomerIndex];
        break;
      } else uniqueCustomers;
    }
    console.log(duplicate?.AccountNo || "no duplicate Found");
  }
  findFirstDuplicateAccount()
  
  
  // let customerCounts = {};
  // for (const customer of customers) {
  //   if (!customerCounts[customer.Name]) {
  //     customer[customer.Name] = 0;
  //   }
  //   customerCounts[customer.Name]++;
  // }
  
  // for (const customer of customers) {
  //   if (customerCounts[customer.Name] > 1) {
  //     console.log(customer.AccountNo);
  //     return;
  //   }
  // }
  // console.log("no duplicate found");
//   findFirstDuplicateAccount()
const customers = [
    {
    "AccountNo": 1001,
    "Name": "John",
    "City": "Bangalore",
    "blsAmount":0
    },
    {
    "AccountNo": 1002,
    "Name": "Tom",
    "City": "Mysore",
    "blsAmount":0
    },
    {
    "AccountNo": 1003,
    "Name": "Kate",
    "City": "Pune",
    "blsAmount":0
    },
    {
    "AccountNo": 1004,
    "Name": "Paul",
    "City": "Delhi",
    "blsAmount":0
    },
    {
    "AccountNo": 1005,
    "Name": "Riya",
    "City": "Mumbai",
    "blsAmount":0
    }
    ]
    
    
const transactions = [
    {
    "Date": "12-01-2022",
    "From": 1001,
    "To": 1003,
    "Amount": 15000
    },
    {
    "Date": "12-01-2022",
    "From": 1003,
    "To": 1002,
    "Amount": 12000
    },
    {
    "Date": "12-01-2022",
    "From": 1002,
    "To": 1005,
    "Amount": 2000
    },
    {
    "Date": "13-01-2022",
    "From": 1003,
    "To": 1001,
    "Amount": 1000
    },
    {
    "Date": "13-01-2022",
    "From": 1002,
    "To": 1001,
    "Amount": 1200
    },
    {
    "Date": "14-01-2022",
    "From": 1001,
    "To": 1002,
    "Amount": 3000
    },
    {
    "Date": "14-01-2022",
    "From": 1005,
    "To": 1003,
    "Amount": 1500
    },
    {
    "Date": "15-01-2022",
    "From": 1005,
    "To": 1003,
    "Amount": 4000
    }
    ]
    
    
    
    for (let i=0;i<transactions.length;i++){
    
    
    
    for (let k=0;k<customers.length;k++){
    if(transactions[i].From == customers[k].AccountNo ){
    customers[k].blsAmount =customers[k].blsAmount - transactions[i].Amount
    }else if(transactions[i].To == customers[k].AccountNo){
    customers[k].blsAmount = customers[k].blsAmount +transactions[i].Amount
    }
    }
    
    
    
    }
    
    
    
    console.log("customers",customers)

    ///////////////////const customers = [
  {
    AccountNo: 1001,
    Name: "John",
    City: "Bangalore",
    blsAmount: 0,
  },
  {
    AccountNo: 1002,
    Name: "Tom",
    City: "Mysore",
    blsAmount: 0,
  },
  {
    AccountNo: 1003,
    Name: "Kate",
    City: "Pune",
    blsAmount: 0,
  },
  {
    AccountNo: 1004,
    Name: "Paul",
    City: "Delhi",
    blsAmount: 0,
  },
  {
    AccountNo: 1005,
    Name: "Riya",
    City: "Mumbai",
    blsAmount: 0,
  },
];

const transactions = [
  {
    Date: "12-01-2022",
    From: 1001,
    To: 1003,
    Amount: 15000,
  },
  {
    Date: "12-01-2022",
    From: 1003,
    To: 1002,
    Amount: 12000,
  },
  {
    Date: "12-01-2022",
    From: 1002,
    To: 1005,
    Amount: 2000,
  },
  {
    Date: "13-01-2022",
    From: 1003,
    To: 1001,
    Amount: 1000,
  },
  {
    Date: "13-01-2022",
    From: 1002,
    To: 1001,
    Amount: 1200,
  },
  {
    Date: "14-01-2022",
    From: 1001,
    To: 1002,
    Amount: 3000,
  },
  {
    Date: "14-01-2022",
    From: 1005,
    To: 1003,
    Amount: 1500,
  },
  {
    Date: "15-01-2022",
    From: 1005,
    To: 1003,
    Amount: 4000,
  },
];

function calculateCustomerBalance() {
  let customerBalances = [];
  for (const customer of customers) {
    let balance = 0;
    for (const transaction of transactions) {
      if (transaction.From === customer.AccountNo) {
        balance -= transaction.Amount;
      } else if (transaction.To === customer.AccountNo) {
        balance += transaction.Amount;
      }
    }
    customerBalances.push({
      account: customer.AccountNo,
      name: customer.Name,
      balance,
    });
  }
  console.log(customerBalances);
}
calculateCustomerBalance();
//////////////////////////////////////////////////////////////////////////
//5
const customers = [
    {
      AccountNo: 1001,
      Name: "John",
      City: "Bangalore",
    },
    {
      AccountNo: 1002,
      Name: "Tom",
      City: "Mysore",
    },
    {
      AccountNo: 1003,
      Name: "Kate",
      City: "Pune",
    },
    {
      AccountNo: 1004,
      Name: "Paul",
      City: "Delhi",
    },
    {
      AccountNo: 1005,
      Name: "Riya",
      City: "Mumbai",
    },
  ];
  const transactions = [
    {
      Date: "12-01-2022",
      From: 1001,
      To: 1003,
      Amount: 15000,
    },
    {
      Date: "12-01-2022",
      From: 1003,
      To: 1002,
      Amount: 12000,
    },
    {
      Date: "12-01-2022",
      From: 1002,
      To: 1005,
      Amount: 2000,
    },
    {
      Date: "13-01-2022",
      From: 1003,
      To: 1001,
      Amount: 1000,
    },
    {
      Date: "13-01-2022",
      From: 1002,
      To: 1001,
      Amount: 1200,
    },
    {
      Date: "14-01-2022",
      From: 1001,
      To: 1002,
      Amount: 3000,
    },
    {
      Date: "14-01-2022",
      From: 1005,
      To: 1003,
      Amount: 1500,
    },
    {
      Date: "15-01-2022",
      From: 1005,
      To: 1003,
      Amount: 4000,
    },
  ];
  function findHighestDebitAccount() {
    let highestDebit = 0;
    let highestDebitAccont = "";
    for (let customer of customers) {
      let debit = 0;
      for (let transaction of transactions) {
        if (transaction.From === customer.AccountNo) {
          debit += transaction.Amount;
        }
      }
      if (highestDebit < debit) {
        highestDebit = debit;
        highestDebitAccont = customer.AccountNo;
      }
    }
    console.log(highestDebitAccont);
  }
  