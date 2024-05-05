# SOFF_marketplace API

### Login ✅
`POST https://api.bis-pro.com/api/login`

```js
{
    "UserName": "****",  // User logini, API logini emas
    "Password": "*****",  // User paroli, API logini emas
    "Company": "******"  // kompaniya nomi
}
```

#### Javob
```js
{
  "@odata.context": "https://su26-02.sb1.cloud:443/b1s/v2/$metadata#B1Sessions/$entity",
  "SessionId": "d35ded02-7006-11ee-8000-005056984211",
  "Version": "1000190",
  "SessionTimeout": 1500
}
```

### Foydalanuvchi ma'lumotini olish ✅
Ismi, Id-si, hisoblari, ruhsatlari

`GET https://api.bis-pro.com/api/userData`

### Javob
```js
{
  "EmployeesInfo": {
    "EmployeeID": 2,
    "FirstName": "Test",
    "LastName": "Testov"
  },
  "CustomBranches": {
    "DocEntry": 1,
    "U_Name": "Test filial",
    "U_CashAccountUzs": "5020",
    "U_CashAccountUsd": "5010",
    "U_CardAccount": "5020",
    "U_TransAccount": "5020",
    "U_Warehouse": "01"
  },
  "Permissions": {
    "Invoices": [
      "CREATE",
      "READ",
      "UPDATE",
      "CANCEL"
    ],
    "Orders": [
      "CREATE",
      "READ",
      "UPDATE",
      "CANCEL"
    ]
  }
}
```


## Sotuvlar ✅✅

### Oxirgi sotuvlarni olish ✅

Mijoz kodi, boshlang'ich va tugash sana bo'yicha izlash.

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/Invoices?$filter=Cancelled eq 'tNO' and CardCode eq '00001' and DocDate ge '2023-09-08T00:00:00Z' and DocDate le '2023-09-08T00:00:00Z'&$select=CardCode,CardName,DocDate,DocEntry,DocNum,DocTotal&$orderby=DocEntry desc`

#### Javob

```js
{
    "value": [
        {
            "CardCode": "200004",
            "CardName": "Erkin Maxmudjonov",
            "DocDate": "20230905",
            "DocEntry": 1210,
            "DocNum": 591,
            "DocTotal": 230.0,
            "PaidToDate": 20.0,
            "Phone1": null
        }
        ...
```

### Sotuv qo'shish ✅

`POST https://api.bis-pro.com/ServiceLayer/b1s/v2/Invoices`

```js
{
    "CardCode": "010001",  // BusinessPartner->CardCode
    "DocDate": "2023-08-25", // Sotuv sanasi
    "DocDueDate": "2023-08-25",  // ikkinchi sana
    "SalesPersonCode": 4,  // UI logindan olasiz
    "Comments": "Bu izoh (kommentariy)",
    "DocumentLines": [
        {
            "ItemCode": "0010",  // Mol kodi
            "Quantity": 1,
            "UnitPrice": 3,
            "DiscountPercent": 15,
            "WarehouseCode": "01",  // UI logindagi U_Warehouse dan olasiz. U_Warehouse mavjud bo'lmasa yubormaysiz
            "BaseType": 17,  // Sotuv buyurtma asosida yaratilgan bo'lsa shu uchta qatorni jo'natasiz. 'BaseType 17' - buyurtmadan yaratilyapti degani.
            "BaseEntry": 39,  // 39-chi buyutmadan yaratilyapti
            "BaseLine": 0  // mazkur sotilyatgan mol buyurtmaning 0-chi moliga to'g'ri keladi
        },
        {
            "ItemCode": "0008",  // Mol kodi
            "Quantity": 2,
            "UnitPrice": 3,
            "DiscountPercent": 15,
            "WarehouseCode": "01",  // UI logindagi U_Warehouse dan olasiz. U_Warehouse mavjud bo'lmasa yubormaysiz
            "BaseType": 17,
            "BaseEntry": 39,
            "BaseLine": 0
        }
    ]
}
```


### Bitta sotuvni olish id bo'yicha ✅

Sotuvga tegishli seriya raqamlarini, tovar ma'lumotlarini ham chiqarib beradi.

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/Invoices(81)?$select=DocTotal,CardName,CardCode,DocDate,DocDueDate,DocEntry,DocNum,PaidToDate,DocumentLines,SalesPersonCode,Comments`

#### Javob

```js
{
  "@odata.context": "https://api.bis-pro.com:443/b1s/v2/$metadata#Invoices/$entity",
  "@odata.etag": "W/\"356A192B7913B04C54574D18C28D46E6395428AB\"",
  "DocEntry": 1256,
  "DocNum": 605,
  "DocDate": "2023-10-02T00:00:00Z",
  "DocDueDate": "2023-10-02T00:00:00Z",
  "CardCode": "010192",
  "CardName": "Test",
  "DocTotal": 600.0,
  "Comments": "",
  "SalesPersonCode": 3,
  "PaidToDate": 600.0,
  "DocumentLines": [
    {
      "LineNum": 0,
      "ItemCode": "0004",
      "ItemDescription": "7900S",
      "Quantity": 3.0,
      "ShipDate": null,
      "Price": 150.0,
      ...
    }
  ]
}
```

## Mijozlar ✅✅

### Mijozlar izlash (ot, telefon bo'yicha izlash) ✅

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/BusinessPartners?$select=CardCode,CardName,Phone1,GroupCode&$filter=CardType eq 'cCustomer' and Frozen eq 'tNO' and (contains(CardName, 'Hasan') or contains(Phone1, '+998'))&$orderby=CardName asc`


### Ta'minotchilarni izlash (ot, telefon bo'yicha izlash) ✅

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/BusinessPartners?$select=CardCode,CardName,Phone1,GroupCode&$filter=CardType eq 'cSupplier' and Frozen eq 'tNO' and (contains(CardName, 'Hasan') or contains(Phone1, '+998'))&$orderby=CardName asc`


### Mijoz / ta'minotchi qo'shish ✅

`POST https://api.bis-pro.com/ServiceLayer/b1s/v2/BusinessPartners`

```js
{
    "CardName": "TEST TEST34232", // mijoz oti
    "CardType": "cCustomer",  // ta'minotchi uchun "cSupplier"
    "Phone1": "998901234567",  // bo'sh bo'lsa "-" qo'yish kerak
    "Currency": "##"
}
```


## Mollar

### Faqat omborda mavjud mollarni olish ✅

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/Items?$select=ItemPrices,ItemCode,ItemName,QuantityOnStock,SalesUnit&$filter=Frozen eq 'tNO' and contains(ItemName,'Air Pods 3') and QuantityOnStock gt 0&$orderby=ItemName asc`

* SalesUnit - o'lcho'v birligi
* ItemPrices[0].Price - narx

### Omborlarni olish ✅

`GET https://su26-02.sb1.cloud/ServiceLayer/b1s/v2/Warehouses?$filter=Inactive eq 'tNO'&$select=WarehouseCode,WarehouseName`

```js
{
  "@odata.context": "https://su26-02.sb1.cloud:443/b1s/v2/$metadata#Warehouses",
  "value": [
    {
      "WarehouseCode": "02",
      "WarehouseName": "склад сырья"
    },
    {
      "WarehouseCode": "01",
      "WarehouseName": "склад товаров"
    }
  ]
}
```

## Dollar kursi ✅✅

### Dollar kursini olish ✅

`POST https://api.bis-pro.com/ServiceLayer/b1s/v2/SBOBobService_GetCurrencyRate`

```js
{
    "Currency": "UZS",
    "Date": "2023-08-19"
}
```

#### Javob

```
12150.000000
```

### Dollar kursini belgilash ✅
`POST https://api.bis-pro.com/ServiceLayer/b1s/v2/SBOBobService_SetCurrencyRate`
```js
{
    "Currency": "UZS",
    "Rate": "11160",  // kurs
    "RateDate": "2023-08-29"  // yoki 20230829
}
```

## Kirim to'lo'vlar ✅✅

### Bitta kirim to'lo'vni olish
`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/IncomingPayments(37)$select=CardCode,CardName,DocDate,DocEntry,DocNum,CashSum,PaymentInvoices,DocCurrency,CashAccount,CashSumSys`

### Kirim to'lo'vlarni izlash ✅

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/IncomingPayments?$filter=CardCode eq '00001' and DocDate ge '2023-09-08T00:00:00Z' and DocDate le '2023-09-08T00:00:00Z'&$select=CardCode,CardName,DocDate,DocEntry,DocNum,CashSum,DocCurrency,CashAccount,CashSumSys&$orderby=DocEntry desc`

### Ochiq sotuvlarni olish (to'lanmagan)
`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/Invoices?$filter=CardCode eq '00001' and DocumentStatus eq 'bost_Open' and Cancelled eq 'tNO'&$select=DocDate,DocEntry,DocNum,DocTotal,PaidToDate,DocObjectCode&$orderby=DocEntry desc`

### Kirim to'lo'v qoshish ✅

`POST https://api.bis-pro.com/ServiceLayer/b1s/v2/IncomingPayments`

```js
{
    "CardCode": "010001",  // Kim to'layapti. BusinessPartner->CardCode
    "CashSum": 100.0,  // umumiy to'lo'v puli. So'm yoki dollarda.
    "CashAccount": "5010",  // foydalanuvchi U_CashAccountUsd, U_CashAccountUzs, U_TransAccount, U_CardAccount dan olasiz.
    "DocDate": "2023-08-30",
    "DocCurrency": "USD",  // valyuta
    "BankChargeAmount": 0,
    "Remarks": "O'tgan kunning qarzini to'ladi",  // izoh
    "PaymentInvoices": [  // To'lo'v faqat mijoz hisobiga bo'lsa PaymentInvoices yubormaysiz
        {
            "DocEntry": 965, // Qaysi sotuvga to'lanyapti.
            "SumApplied": 50.0 // 965 sotuvga qancha to'lanyapti. Faqat dollarda!
        },
        {
            "DocEntry": 219, // Qaysi sotuvga to'lanyapti.
            "SumApplied": 50.0 // 219 sotuvga qancha to'lanyapti. Faqat dollarda!
        }
    ]
}
```

Mijoz hisobiga pul to'lash uchun PaymentInvoices dagi miqdordan o'sha mijoz hisobiga to'lanyatgan pul miqdoricha ko'p to'laysiz. Misol uchun yuqoridagi kodda CashSum da 100 o'rniga 150 yozsangiz, 50$ 965 chi sotuvga ketadi, 50$ 219 chi sotuvga ketadi va 50$ mijoz hisobiga ketadi.

**!! To'lo'v qo'shilganidan keyin "Iltimos, to'lo'v to'g'ri qo'shilganini tekshiring." yozuv chiqarib, eski sotuv skrinini ko'rsating.**

## Chiqim to'lo'vlarni olish

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/VendorPayments?$filter=CardCode eq '00001' and DocDate ge '2023-09-08T00:00:00Z' and DocDate le '2023-09-08T00:00:00Z'&$select=CardCode,CardName,DocDate,DocEntry,DocNum,CashSum&$orderby=DocEntry desc`

### Chiqim to'lo'v qo'shish

`POST https://api.bis-pro.com/ServiceLayer/b1s/v2/VendorPayments`

```js
{
    "CardCode": "6910", // Employee->BonusAccount
    "DocType": "rAccount",  // shunday tursin
    "CashSum": 100000,  // so'm yoki dollarda
    "CashAccount": "5020",
    "BankChargeAmount": 0,
    "BankChargeAmountInSC": 0,
    "DocDate": "2023-08-20",  // Qachon to'landi.
    "DocCurrency": "UZS",  // valyuta
    "PaymentAccounts": [
        {
            "AccountCode": "6910",  //  Employee->BonusAccount
            "SumPaid": 100000,  // CashSum so'mda bo'lsa so'mda, dollarda bo'lsa dollarda
            "InvoiceType": "it_Invoice" // Sotuvga "it_Invoice" qo'yasiz, sotuv buyurtmasiga "it_DownPayment"
        }
     ]
}
```

## Xarid arizasi

"BaseType": 17,
"BaseEntry": 16,
"BaseLine": 0,

## Sotuv buyurtmalari

Sotuv kabi, lekin url da Invoice o'rniga Order yoziladi.


## Takliflar
(prodaja - коммерческое предложение sales quotation)

Sotuv kabi, lekin url da Invoice o'rniga Quotations yoziladi.


## Tovar kirimi OPDN
(zakupka - поступление товара good receipt po)

Sotuv kabi, lekin url da Invoice o'rniga PurchaseDeliveryNotes yoziladi.


## Yuklashlar
(prodaja -> otgruzka delivery ODLN)

Sotuv kabi, lekin url da Invoice o'rniga DeliveryNotes yoziladi.

## Xaridlar OPCH

Sotuv kabi, lekin url da Invoice o'rniga PurchaseInvoices yoziladi.

## Xarid buyurtmalari OPOR

Sotuv kabi, lekin url da Invoice o'rniga PurchaseOrders yoziladi.


## Tovar ko'chirish / перемещение запасов

### Tovar ko'chirishni qo'shish

`POST https://api.bis-pro.com/ServiceLayer/b1s/v2/StockTransfers`

```js
{
    "DocDate": "2023-08-28T00:00:00Z",   // Sana
    "FromWarehouse": "01",  // Qaysi ombordan
    "ToWarehouse": "02",  // Qaysi omborga
    "StockTransferLines": [
        {
            "ItemCode": "0001",  // Mol kodi
            "Quantity": 1.0,  // Soni
            "WarehouseCode": "02",  // Qaysi ombordan
            "FromWarehouseCode": "01"  // Qaysi ombordan
        },
        {
            "ItemCode": "0003",  // ikkinchi mol kodi
            "Quantity": 1.0,
            "WarehouseCode": "02",
            "FromWarehouseCode": "03"
        }
    ]
}
```

### Tovar ko'chirishlarni izlash
`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/StockTransfers?$select=DocEntry,DocDate,FromWarehouse,ToWarehouse&$filter=DocDate ge '2023-09-08T00:00:00Z' and DocDate le '2023-09-08T00:00:00Z'&$orderby=DocEntry desc`

### Bitta tovar ko'chirishni olish
`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/StockTransfers(123)`

## Ombor

### Barcha mollarni olish

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/SQLQueries('getItemsByWarehouses')/List`

Lekin obmor nomlarini chiqarmaydi, faqat kodlarini.

#### Javob

```js
{
    ...
    "value": [
        {
            "ItemCode": "0008",  // mol kodi
            "ItemName": "8700",  // mol nomi
            "OnHand": 13.0,   // qancha qolgan
            "WhsCode": "01"  // ombor kodi
        },
        {
            "ItemCode": "0002",
            "ItemName": "Rul",
            "OnHand": 55.0,
            "WhsCode": "01"
        },
        ...
```

### Kunlik kirim (ishlamaydi)

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/SQLQueries('getIncomingSum2')/List?date=%272023-09-12T00:00:00Z%27&SlpCode=4&account1=%275210%27&account2=%275020%27&account3=%275030%27&account4=%275040%27&bonusAccount=%276910%27`


#### Javob

```js
{
    "value": [
        {
            "Credit": 0.0,
            "Debit": 4.1150,  // bonus berildi
            "Tur": "Bonus berildi"
        },
        {
            "Credit": 4.1150,  // chiqim
            "Debit": 122.3450,  // kirim
            "Tur": "Umumiy kirim chiqim"
        },
        {
            "Credit": 0.0,
            "Debit": 8.230,  // bonusdan qarz to'landi
            "Tur": "Bonusdan qarz tolandi"
        }
    ]
}
```

### Kunlik kirim tafsilotlari (ishlamaydi)

`GET https://api.bis-pro.com/ServiceLayer/b1s/v2/SQLQueries('getIncomingSum2Details')/List?date=%272023-09-12T00:00:00Z%27&SlpCode=4&account1=%275210%27&account2=%275020%27&account3=%275030%27&account4=%275040%27&bonusAccount=%276910%27`

#### Javob
```js
{
    "value": [
        {
            "Debit": 100.0,
            "Debit so'm": 0.0,
            "Hisob": "5210",
            "Hujjat raqami": "299",
            "Hujjat turi": "24",  // Shu yerda "24" tursa kirim to'lov deb yozasiz. "13" tursa - sotuv, "14" - mol qaytarish, "46" - chiqim to'lo'v.
            "Kontr hisob": "010005",
            "Kredit": 0.0,
            "Kredit so'm": 0.0,
            "Sana": "20230912",
            "Tur": "Umumiy kirim chiqim"
        }
        ...
```
