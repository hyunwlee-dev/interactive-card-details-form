import React from 'react';

interface IfProps {
  condition: boolean;
  children: React.ReactNode;
};

interface ChildProps {
  children: React.ReactNode;
};

export default function If({ condition, children }: IfProps) {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (condition) {
        if (child.type === If.Then) {
          return child;
        }
      } else {
        if (child.type === If.Else) {
          return child;
        }
      }
    }
  });
}

If.Then = function Then({ children }: ChildProps) {
  return children;
};

If.Else = function Else({ children }: ChildProps) {
  return children;
};
