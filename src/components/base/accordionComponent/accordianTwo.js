import React, { Fragment } from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css'

const AccordionTwo = () => {
  const DummyContent1 = () => (
    <div
      className="collapse show"
      id="collapseicon"
      aria-labelledby="collapseicon"
      data-parent="#accordionoc"
    >
      <div className="card">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
      </div>
    </div>
  )
  const DummyContent2 = () => (
    <div
      className="collapse show"
      id="collapseicon1"
      aria-labelledby="collapseicon1"
      data-parent="#accordionoc"
    >
      <p>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et.
      </p>
    </div>
  )
  const DummyContent3 = () => (
    <div
      className="collapse show"
      id="collapseicon2"
      data-parent="#accordionoc"
    >
      <p>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et.
      </p>
    </div>
  )
  return (
    <Fragment>
      <div className="card">
        <Accordion atomic={true}>
          <AccordionItem
            className="card-header bg-primary"
            title="Collapsible Group Item #1"
          >
            <DummyContent1 />
          </AccordionItem>
          <AccordionItem
            className="card-header bg-primary"
            title="Collapsible Group Item #2"
          >
            <DummyContent2 />
          </AccordionItem>
          <AccordionItem
            className="card-header bg-primary"
            title="Collapsible Group Item #3"
          >
            <DummyContent3 />
          </AccordionItem>
        </Accordion>
      </div>
    </Fragment>
  )
}

export default AccordionTwo
