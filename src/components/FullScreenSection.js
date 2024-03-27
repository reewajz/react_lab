import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;

{
  $project: {
    _id: "$quiz._id",
    name: "$quiz.name",
    type: {
      $cond: {
        if: { $ifNull: ["$quiz.attemptsLimit", false] },
        then: "quiz",
        else: "assignment",
      },
    },
    totalMarks: "$quiz.totalMarks",
    submissions: "$quiz.submissions",
    finalSubmission: "$quizSubmission.finalSubmission",
    totalPoints: "$quiz.totalPoints",
    startDate: "$quiz.startDate",
    endDate: "$quiz.endDate",
    description: "$quiz.description",
    status: {
      $switch: {
        branches: [
          {
            case: { $lt: ["$quiz.endDate", new Date()] },
            then: "overdue",
          },
          {
            case: { $gt: ["$quiz.startDate", new Date()] },
            then: "upcoming",
          },
        ],
        default: "ongoing",
      },
    },
  },
},
