import { DeepTopic } from "@/types/knowledge";
import { Container } from "@/components/ui/container";

import { TopicHero } from "./TopicHero";
import { CoreQuestion } from "./CoreQuestion";
import { MentalModel } from "./MentalModel";
import { WhyItExists } from "./WhyItExists";
import { ConceptLayers } from "./ConceptLayers";
import { HowItWorks } from "./HowItWorks";
import { KeyConcepts } from "./KeyConcepts";
import { WhereItBreaks } from "./WhereItBreaks";
import { Tradeoffs } from "./Tradeoffs";
import { EngineeringMoment } from "./EngineeringMoment";
import { SystemConnections } from "./SystemConnections";
import { KnowledgeConnections } from "./KnowledgeConnections";
import { Misconceptions } from "./Misconceptions";
import { TryItYourself } from "./TryItYourself";
import { NextLearning } from "./NextLearning";

interface DeepTopicLayoutProps {
  topic: DeepTopic;
  nextTopics: Array<{
    slug: string;
    title: string;
    description: string;
    href: string;
  }>;
}

export function DeepTopicLayout({ topic, nextTopics }: DeepTopicLayoutProps) {
  return (
    <Container>
      <TopicHero topic={topic} />
      
      {topic.overview && (
        <CoreQuestion question={topic.overview.question} answer={topic.overview.answer} />
      )}
      
      {topic.mentalModel && (
        <MentalModel model={topic.mentalModel} />
      )}
      
      {topic.whyItExists && (
        <WhyItExists why={topic.whyItExists} />
      )}
      
      {topic.conceptLayers && topic.conceptLayers.length > 0 && (
        <ConceptLayers layers={topic.conceptLayers} />
      )}
      
      {(topic.howItWorksDetailed || topic.howItWorks) && (
        <HowItWorks data={topic.howItWorksDetailed} fallback={topic.howItWorks} />
      )}
      
      {topic.coreConcepts && topic.coreConcepts.length > 0 && (
        <KeyConcepts concepts={topic.coreConcepts} />
      )}
      
      {topic.whereItBreaks && topic.whereItBreaks.length > 0 && (
        <WhereItBreaks items={topic.whereItBreaks} />
      )}
      
      {topic.tradeoffs && topic.tradeoffs.length > 0 && (
        <Tradeoffs tradeoffs={topic.tradeoffs} />
      )}
      
      {topic.engineeringMoment && (
        <EngineeringMoment moment={topic.engineeringMoment} />
      )}
      
      {topic.systemConnections && topic.systemConnections.length > 0 && (
        <SystemConnections connections={topic.systemConnections} />
      )}
      
      {topic.connections && topic.connections.length > 0 && (
        <KnowledgeConnections connections={topic.connections} />
      )}
      
      {topic.misconceptions && topic.misconceptions.length > 0 && (
        <Misconceptions items={topic.misconceptions} />
      )}
      
      {topic.exercises && (
        <TryItYourself exercises={topic.exercises} />
      )}
      
      <NextLearning topic={topic} nextTopics={nextTopics} />
    </Container>
  );
}
