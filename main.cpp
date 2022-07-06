#include <iostream>
#include <time.h>
#include <stdlib.h>
#include <stdio.h>

// Headers
void printll(int (*table)[4], int total);
int findStrike(int *forAnswer, int *answer);
int findBall(int *foranswer, int *answer);
void findForAnswer(int (*table)[4], int &choice, int *forAnswer);
void first(int (*table)[4], int &total);
int after(int (*table)[4], int *forAnswer, int &strike, int &ball, int total);
void remove(int (*table)[4], int &total);
int main();

int main() {
  int table[720][4];
  int total = 0;
  int choice = 0;
  int answer[3] = { 4, 8, 6 };
  int forAnswer[3];
  int strike = 0;
  int ball = 0;
  int re = 1;
  int num = 0;

  while (1) {
    num = 0;
    re = 1;

    first(table, total);
    srand(time(NULL));

    std::cout << "1~9의 정수 3개 : ";
    scanf("%d %d %d", &answer[0], &answer[1], &answer[2]);

    do {
      num++;
      choice = rand() % total;
      findForAnswer(table, choice, forAnswer);

      printf(
        "[%d] 현재 숫자 %d %d %d\n",
        num,
        forAnswer[0],
        forAnswer[1],
        forAnswer[2]
      );

      strike = findStrike(forAnswer, answer);
      ball = findBall(forAnswer, answer);
      
			printf("     ------%d strike, %d ball-----\n", strike, ball);

      re = after(table, forAnswer, strike, ball, total);
      remove(table, total);

      if (total == 0) {
        std::cout << ("\n\n정답!\n\n");
        break;
      }
    } while (re);

    if (strike == 3)
      std::cout <<  "시도 횟수 : " << num << std::endl;
  }
}

void printll(int (*table)[4], int total) {
  for (int i = 0; i < total + 5; i++) 
    std::cout << table[i][0] << table[i][1] << table[i][2] << table[i][3] << std::endl;
}

int findStrike(int *forAnswer, int *answer) {
  int s = 0;
  for (int i = 0; i < 3; i++)
    if (answer[i] == forAnswer[i])
      s++;

  return s;
}

int findBall(int *forAnswer, int *answer) {
  int b = 0;
  for (int i = 0; i < 3; i++)
    for (int j = 0; j < 3; j++)
      if (i != j && answer[i] == forAnswer[j])
        b++;
  
  return b;
}

void findForAnswer(int (*table)[4], int &choice, int *forAnswer) {
  forAnswer[0] = table[choice][0];
  forAnswer[1] = table[choice][1];
  forAnswer[2] = table[choice][2];
}

void first(int (*table)[4], int &total) {
  int num = 9;
  
  for (int i = 0; i < num; i++) {
    for (int j = 0; j < num; j++) {
      for (int k = 0; k < num; k++) {
        // std::cout << total << std::endl;
        table[total][0] = i + 1;
        table[total][1] = j + 1;
        table[total][2] = k + 1;

        if (i == j || i == k || j == k)
          table[total][3] = -1;
        else
          table[total][3] = 1;

        if (num == 10) {
          table[total][0]--;
          table[total][1]--;
          table[total][2]--;
        }

        total++;
      }
    }
  }
}


int after(int (*table)[4], int *forAnswer, int &strike, int &ball, int total) {
  if (strike == 3)
    return 0;
  
  if (strike == 0 && ball == 0) {
    for (int i = 0; i < total; i++)
      if (
        table[i][0] == forAnswer[0] ||
        table[i][0] == forAnswer[1] ||
        table[i][0] == forAnswer[2] ||
        table[i][1] == forAnswer[0] ||
        table[i][1] == forAnswer[1] ||
        table[i][1] == forAnswer[2] ||
        table[i][2] == forAnswer[0] ||
        table[i][2] == forAnswer[1] ||
        table[i][2] == forAnswer[2] 
      )
        table[i][3] = -1;
  }

  for (int i = 0; i < total; i++) {
    int s = 0, b = 0;
    s = findStrike(forAnswer, table[i]);
    b = findBall(forAnswer, table[i]);

    if (s != strike || b != ball)
      table[i][3] = -1;
  }

  return 1;
}

void remove(int (*table)[4], int &total) {
  for (int z = 0; z < total; z++) {\
    for (int i = 0; i < total; i++) {
      for (int j = 0; j < total; j++) {
        if (table[j][3] == -1) {
          table[j][0] = table[total - 1][0];
          table[j][1] = table[total - 1][1];
          table[j][2] = table[total - 1][2];
          table[j][3] = table[total - 1][3];
          table[total-1][3] = -1;
          total--;
        }
      }
    }
  }
}
