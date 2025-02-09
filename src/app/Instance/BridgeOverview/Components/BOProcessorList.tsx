import React from "react";
import { Card, CardBody, CardTitle } from "@patternfly/react-core";
import { BOEmptyState } from "./BOEmptyState";
import { DemoData } from "../BridgeOverview";
import { BODashboardTableView } from "./BODashboardTableView";

export interface BOProcessorListProps {
  processorList: DemoData[];
  onAddingProcessor: () => void;
}

export const BOProcessorList = (props: BOProcessorListProps): JSX.Element => {
  const { processorList, onAddingProcessor } = props;
  const desc =
    "Processors use Camel DSL to filter and transform events before routing events to one or more actions";

  return (
    <Card>
      <CardTitle>Event processing</CardTitle>
      <CardBody>
        {processorList.length == 0 ? (
          <BOEmptyState
            title={"No processors"}
            description={desc}
            buttonLabel={"Create processor"}
            variant={"secondary"}
            onButtonClick={onAddingProcessor}
          />
        ) : (
          <BODashboardTableView name={"processors"} demoData={processorList} />
        )}
      </CardBody>
    </Card>
  );
};
