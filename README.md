# M/M/1 LCG


## Overview
This project is a web application that simulates an M/M/1 queuing system using a linear congruential generator (LCG). Users can input the arrival rate and service rate, click the submit button, and generate a table with various performance metrics for the queuing system. Additionally, the system allows users to generate random priorities for each customer based on the M/M/1 table.

Deployed project Link : 
https://priority-queue-simulator.vercel.app/

To run locally write the following commands in Vs code terminal to run the project
```
git clone https://github.com/umershaikh123/priority-queue-simulator.git

cd priority-queue-simulator

npm install

npm run dev
```


## Usage

### 1. Arrival Rate and Service Rate Input
Start by entering the arrival rate (λ) and service rate (µ).
Click the submit button to generate a table.

### 2. Generated Table
The table includes the following columns:

- S.no: Serial number.
- Cumulative Probability (Cp): Cumulative probability of arrival.
- Cp Lookup: Lookup value for cumulative probability.
- Avg Time Between Arrivals: Average time between arrivals.
- Inter Arrival Time: Time between consecutive arrivals.
- Arrival Time: Time at which a customer arrives.
- Service Time: Time taken to serve a customer.
- Start Time: Time at which service starts.
- End Time: Time at which service ends.
- Turnaround Time: Total time a customer spends in the system.
- Waiting Time: Time a customer waits in the queue.
- Response Time: Time taken to respond to a customer.
- The number of rows and total customers are determined when cumulative probability reaches 1.

![image](https://github.com/umershaikh123/priority-queue-simulator/assets/42178214/0246ff46-54cf-445b-ab31-fd9c549e6369)

### 3. Priority Generation Inputs
After the M/M/1 table is generated, input the parameters for priority generation.
Click the submit button to generate random priorities for each customer based on the previous M/M/1 table.

![image](https://github.com/umershaikh123/priority-queue-simulator/assets/42178214/e4ce3685-a389-4a71-870c-fc1fa89db3a9)




 
