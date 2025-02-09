import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardExpandableContent,
  CardHeader,
  CardTitle,
  Flex,
  Grid,
  Label,
  LabelGroup,
  Level,
  List,
  ListItem,
} from "@patternfly/react-core";
import { InfoCircleIcon } from "@patternfly/react-icons";

export const BOGettingStarted = (): JSX.Element => {
  const [isCardExpanded, setIsCardExpanded] = useState<boolean>(false);

  return (
    <Card isExpanded={isCardExpanded}>
      <CardHeader
        onExpand={(): void => {
          setIsCardExpanded(!isCardExpanded);
        }}
      >
        {isCardExpanded ? (
          <CardTitle>Getting Started</CardTitle>
        ) : (
          <Level hasGutter>
            <CardTitle>Getting Started</CardTitle>
            <LabelGroup numLabels={4}>
              <Label icon={<InfoCircleIcon />} color="green">
                Create sink connector
              </Label>
              <Label icon={<InfoCircleIcon />} color="purple">
                Create processor
              </Label>
              <Label icon={<InfoCircleIcon />} color="blue">
                Create source connector
              </Label>
              <Label icon={<InfoCircleIcon />} color="orange">
                Quickstart guides
              </Label>
            </LabelGroup>
          </Level>
        )}
      </CardHeader>
      <CardExpandableContent>
        <CardBody>
          <Grid md={6} lg={3} hasGutter>
            <Flex
              spaceItems={{ default: "spaceItemsSm" }}
              alignItems={{ default: "alignItemsFlexStart" }}
              direction={{ default: "column" }}
              grow={{ default: "grow" }}
            >
              <Label icon={<InfoCircleIcon />} color="green">
                Create sink connector
              </Label>
              <p>
                First configure a sink connector needed to route processed
                events to your external systems
              </p>
            </Flex>
            <Flex
              spaceItems={{ default: "spaceItemsSm" }}
              alignItems={{ default: "alignItemsFlexStart" }}
              direction={{ default: "column" }}
              grow={{ default: "grow" }}
            >
              <Label icon={<InfoCircleIcon />} color="purple">
                Create processor
              </Label>
              <p>
                Create a processor to filter and transform events before routing
                events to sinks
              </p>
              <List isPlain>
                <ListItem>
                  <a href="#">Learn about YAML templates</a>
                </ListItem>
              </List>
            </Flex>
            <Flex
              spaceItems={{ default: "spaceItemsSm" }}
              alignItems={{ default: "alignItemsFlexStart" }}
              direction={{ default: "column" }}
              grow={{ default: "grow" }}
            >
              <Label icon={<InfoCircleIcon />} color="green">
                Create source connector
              </Label>
              <p>
                Configure a source connector or use the ingress endpoint to send
                events to your bridge
              </p>
            </Flex>

            <Flex
              spaceItems={{ default: "spaceItemsSm" }}
              alignItems={{ default: "alignItemsFlexStart" }}
              direction={{ default: "column" }}
              grow={{ default: "grow" }}
            >
              <Label icon={<InfoCircleIcon />} color="orange">
                Quickstart guides
              </Label>
              <p>
                Get started with features using our step-by-step documenation
              </p>
              <List isPlain>
                <ListItem>
                  <a href="#">View getting started quickstart</a>
                </ListItem>
                <ListItem>
                  <a href="#">View introduction documentation</a>
                </ListItem>
              </List>
            </Flex>
          </Grid>
        </CardBody>
      </CardExpandableContent>
    </Card>
  );
};
