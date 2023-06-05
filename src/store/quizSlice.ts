// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState: {
//     questions: [
//       { id: '1', text: 'Question 1', answers: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
//       // More questions...
//     ],
//     responses: {},
//     results: null,
//   },
//   reducers: {
//     submitAnswer(state, action) {
//       const { questionId, answer } = action.payload;
//       state.responses[questionId] = answer;
//     },
//     calculateResults(state) {
//       const correctResponses = state.questions.filter(
//         (question) => state.responses[question.id] === question.correctAnswer
//       ).length;
//       state.results = correctResponses / state.questions.length;
//     },
//   },
// });

// export const { submitAnswer, calculateResults } = quizSlice.actions;

// const store = configureStore({
//   reducer: {
//     quiz: quizSlice.reducer,
//   },
// });

// export default store;
export {}
