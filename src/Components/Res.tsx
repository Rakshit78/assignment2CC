import { PieChart } from 'react-minimal-pie-chart';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
type Props = {
  ans1: string;
  ans2: string;
  ans3: any;
  ans4: any;
  ans5: string;
  question: any;
  user: string;
  marks: number;
  navigate: any;
};

export default function Res(props: Props) {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <br />
        <Button variant='contained' onClick={() => props.navigate('/')}>
          Retake
        </Button>
        <h1>
          Hey!! {props.user} You Score{props.marks}
        </h1>

        <PieChart
          data={[
            { title: 'yoyrmarks', value: props.marks, color: '#C13C37' },
            { title: 'totalmarks', value: 5, color: '#e5e5e5' },
          ]}
          style={{ width: '200px' }}
        />

        <ol>
          <li>
            {props.question.ques1}
            <br />
            <b>Answer: </b>
            {props.question.ans1}
            <br />
            <b>Your Answer: </b>
            {props.ans1}
          </li>

          <li>
            {props.question.ques2}
            <br />
            <b>Answer: </b>
            {props.question.ans2}
            <br />
            <b>Your Answer: </b>
            {props.ans2}
          </li>

          <li>
            {props.question.ques3}
            <br />
            <b>Answer: </b>
            {props.question.ans3.ans1 + ' '}
            {props.question.ans3.ans2}
            <br />
            <b>Your Answer: </b>
            {props.ans3.a}
            {props.ans3.b}
          </li>

          <li>
            {props.question.ques4}
            <br />
            <b>Answer: </b>
            {props.question.ans4.app1 + ' '}
            {props.question.ans4.app2 + ' '}
            {props.question.ans4.app3 + ' '}
            {props.question.ans4.app4 + ' '}
            <br />
            <b>Your Answer: </b>
            {props.ans4.a}
            {props.ans4.b}
            {props.ans4.c}
            {props.ans4.d}
          </li>

          <li>
            {props.question.ques5}
            <br />
            <b>Answer: </b>
            {props.question.ans5}
            <br />
            <b>Your Answer: </b>
            {props.ans5}
          </li>
        </ol>
      </div>
    </div>
  );
}
