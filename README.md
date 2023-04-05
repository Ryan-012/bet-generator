
# 💵 Bet Generator

Bet generator is a project that allows you to make bets and get results from these bets made on the same day. Created in NodeJS, and the communication happens through REST APIs.



## Project Structure

- `./src/middlewares/verifyNumbers.js`: Verify all numbers betted accordingly with the game rules.

- `./src/controller.js`: Are all functions that communicate with the database through the Model.

- `./src/functions`: This folder includes some auxiliary functions of the controller that are separated for better reuse.
## APIs

`HostName`: https://bet-generator-three.vercel.app

#### Get all bets

```http
  GET /allBets
```



#### New bet

```http
  POST /saveBet
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Your name. |
| `bet`      | `array` | **Required**. Your numbers between 1 at 60, array length is max 15 and min 6. |

#### Generate result

```http
  GET /generateResult
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `prize` | `number` |  Case you want to put the prize value (prize standard value is 10.000). |

#### Clean bets

```http
  DELETE /cleanBets
```



