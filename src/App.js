import React from "react";
import CommentDetails from "./CommentDetails";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="App">
      <ApprovalCard>
        <CommentDetails
          author="Wasif"
          time="Today at 7:00 PM"
          comment="Nice Blog"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Dawar"
          time="Yesterday at 8:00 PM"
          comment="Good One"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Arish"
          time="Today at 4:50 PM"
          comment="Best "
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Ahmed"
          time="Tuesday at 3:00 PM"
          comment="Superb"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
