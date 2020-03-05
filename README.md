# rDate ![npm](https://img.shields.io/npm/v/rdate)
## List of functions:
+ [addition](#--addition)
+ [daysInMonth](#--daysInMonth)
+ [duration](#--duration)
+ [format](#--format)
+ [isEarlier](#--isEarlier)
+ [isLater](#--isLater)
+ [isToday](#--isToday)
+ [parseDate](#--parseDate)
+ [sub](#--sub)
+ [isValidDate](#--isValidDate)


## Functions
### - addition()

```javascript
addition(date, {day, month})
```

options:
- ???

Sample:
```javascript
 addition(new Date('1990/01.19'),{day: 2})
 // ????
```
result: ???
### - daysInMonth()

```javascript
daysInMonth(year, month)
```

options:
- year - number
- month - number

Sample:
```javascript
 daysInMonth(2019,2)
 // 28
```
result: numbers of days in month and year

### - format()

```javascript
format(date, format)
```

options:
- date - date in javaScript (`new Date()`)
- format
    - `'MM'` - months
    - `'DD'` - days
    - `'YYYY'` / `'YY'` - years

Sample:
```javascript
 format(new rDate([10, 12, 1990]),'MM-DD-YY')
```

### - isEarlier()
Check if first parametr is earlier than second. When second parameter is not defined then function check if first parameter is earlier than today.

```javascript
isEarlier(firstDate, secondDate)
isEarlier(firstDate)
```

options:
- firstDate - date in javaScript (`new Date()`)
- secondDate - date in javaScript (`new Date()`) [optional]

Sample:
```javascript
 isEarlier(new rDate([17, 10, 1990]),new rDate([17, 12, 1990]))

 isEarlier(new rDate([17, 1, 1990]))
```

### - isLater()
Check if first parametr is later than second. When second parameter is not defined then function check if first parameter is later than today.

```javascript
isLater(firstDate, secondDate)
isLater(firstDate)
```

options:
- firstDate - date in javaScript (`new Date()`)
- secondDate - date in javaScript (`new Date()`) [optional]

Sample:
```javascript
 isLater(new rDate([17, 10, 1990]),new rDate([17, 12, 1990]))

 isLater(new rDate([17, 1, 1990]))
```

### - parseDate()

Parse string to date

```javascript
parseDate(date)
```

options:
- date - string (format: 'YYYY/MM/DD', 'DD/MM/YYYY', 'YYYY-MM-DD', 'DD-MM-YYYY')

Sample:
```javascript
 parseDate('2010/10/20')
```

### - sub()


```javascript
sub(firstDate, secondDate)
```
options:
- firstDate - date in javaScript (`new Date()`)
- secondDate - date in javaScript (`new Date()`)


Sample:
```javascript
 sub(new rDate([10, 12, 1990]),new rDate([10, 12, 1990]))
```

result: number in miliseconds


### - isToday()


```javascript
isToday(date)
```
options:
- date - date in text in format `'YYYY/MM/DD'`


Sample:
```javascript
 isToday('1990/01/17')
```

result: true or false

### - isValidDate()


```javascript
isValidDate(date)
```
options:
- date - date in text in format `'YYYY/MM/DD'`


Sample:
```javascript
 isValidDate('1990/01/17')
```

result: true or false

### - duration()


```javascript
duration(msValue, date)
```
options:
- msValue - value in miliseconds
- date - date in javaScript (`new Date()`) [optional]


Sample:
```javascript
 duration(360000)
 //{ day: 0, hour: 0, min: 6, sec: 0, ms: 0 }
```
```javascript
 duration(360000, new Date('1990/01/17 10:00'))
 //{ day: 0, hour: 0, min: 6, sec: 0, ms: 0, year: 0, month: 0 }
```

result: object with value of days, months, years, minutes, hours, seconds and miliseconds
