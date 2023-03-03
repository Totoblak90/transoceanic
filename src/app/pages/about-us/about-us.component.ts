import { Component } from '@angular/core';
import { AboutUsGridItems } from 'src/app/interfaces/grids.interface';
import { WhatWeDoGridItems } from '../../interfaces/grids.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  homeGridItems: AboutUsGridItems[] = [
    {
      title: 'Quality goods to fit any budget',
      info: `
        <p>
          Marine Trading Supply (MTS) is a full service ship chandler on the eastern seaboard of the US.
          Based in New Jersey, Reliable ship supply services stretching from Portland, Maine and Norfolk Virginia.)
        </p>
        <p>
          MTS, We specialize in coordinating complex deliveries of perishable goods globally with competitive prices and flexible payment terms.
          Our in-house quality control measures and on-hand inventory ensure consistency and quick turnaround between orders.
        </p>
      `
    },
    {
      title: 'One timeless customer-driven focus',
      info: `
        <p>
          MTS, We maintain thousands of common supplies in inventory to guarantee your parts are priced affordably and always available.
          Our selection of on-hand inventory ranges from engine parts to galley supplies and is supplemented by experienced purchasing agents capable of accommodating special requests.
          Technical support and engineering expertise is available through our in-house ship management team.
        </p>
      `
    },
    {
      title: 'Reliable ship supply services',
      info: `
        <p>
          MTS has been a premier provider of goods services and seamless port logistics to the maritime industry.
          We have developed a reputation for reliable, world-class service through our values of Excellence, Responsibility, Leadership, Collaboration, Integrity and Passion.
        </p>
        <ul>
          <li>
            Premium frozen, fresh and dry provisions
          </li>
          <li>
            Bonded stores
          </li>
          <li>
            Contract Pricing
          </li>
          <li>
            Regional delicacies
          </li>
          <li>
            Transparent invoicing
          </li>
          <li>
            Excellent payment terms
          </li>
        </ul>
      `
    },
    {
      info: '<img src="assets/images/barco-carga.webp" alt="Barco de carga" />'
    },
  ]

  whatWeDoGridItems: WhatWeDoGridItems[] = [{
      title: 'Your choice for dependability',
      subtitle: '',
      info: `
        <div>
          <img src="assets/images/what-we-do-1.webp" alt="Imagen de camiones y un mapa" />
        </div>
        <div>
          <h3>Highlights</h3>
          <ul>
            <li>Customized supply solutions</li>
            <li>Global delivery network</li>
            <li>Nationwide distribution centers</li>
            <li>Refrigerated vehicle fleet</li>
            <li>Import/Export services</li>
            <li>Land, air and sea freight</li>
            <li>Consolidation services</li>
            <li>Customer property storage</li>
            <li>Administrative assistance</li>
          </ul>
          <p>
            MTS offers the most comprehensive marine supply options available by combining reliable services and competitive pricing with a global support network.
            Our experience and growing number of international distribution centers allows us to supply vessels of any type with a 100% fill-rate.
            Whether you choose us to provision your vessel, supply deck stores or ship containers around the globe, we guarantee your experience will always be highlighted by
            world-class customer service and personalized attention.
          </p>
        </div>
      `
    },
    {
      title: 'PROVISIONS',
      subtitle: 'Quality goods to fit any budget',
      info: `
        <div>
          <img src="assets/images/what-we-do-2.webp" alt="Comia bien servida y decorada" />
        </div>
        <div>
          <h3>Highlights</h3>
          <ul>
            <li>Premium frozen, fresh and dry provisions</li>
            <li>Bonded stores</li>
            <li>Contract Pricing</li>
            <li>Regional delicacies</li>
            <li>Transparent invoicing</li>
            <li>Excellent payment terms</li>
          </ul>
          <p>
            MTS offer a wide range of fresh, frozen and dry provisions to cater to the diverse preferences and needs while remaining fully compliant with the high demands of
            today's food supply chain and international food safety standards
          </p>
        </div>
      `
    },
    {
      title: 'DECK AND ENGINE SUPPLIES',
      subtitle: 'Technical services and spares on-demand',
      info: `
        <div>
          <img src="assets/images/what-we-do-3.webp" alt="Tuberías"  />
        </div>
        <div>
          <h3>Highlights</h3>
          <ul>
            <li>Globally sourced inventory</li>
            <li>IMPA and ISSA catalogue items</li>
            <li>Engine components</li>
            <li>Deck, galley, and cabin supplies</li>
            <li>Navigational equipment</li>
            <li>Safety equipment</li>
            <li>Machinery</li>
            <li>Tools</li>
            <li>Technical support services</li>
          </ul>
          <p>
            MTS maintains thousands of common supplies in inventory to guarantee your parts are priced affordably and always available.
            Our selection of on-hand inventory ranges from engine parts to galley supplies and is supplemented by experienced purchasing agents capable of accommodating special requests.
            Technical support and engineering expertise is available through our in-house ship management team.
          </p>
        </div>
      `
    },
    {
      title: 'CABIN STORES',
      subtitle: 'Strong commitment to quality efficient service with wide variety of stores',
      info: `
        <div>
          <img src="assets/images/what-we-do-4.webp" alt="Camión con carga en una ruta"  />
        </div>
        <div>
          <h3>Highlights</h3>
          <ul>
            <li>Linen/ Bedding Supplies</li>
            <li>Gallery Supplies</li>
            <li>Cleaning Products & Consumables</li>
            <li>Floor Coverings</li>
            <li>Dishware/Brush ware</li>
            <li>Cutlery</li>
            <li>Compactor Bags</li>
            <li>Electrical Appliances 110/220V</li>
            <li>Hand Cleaners</li>
            <li>Toiletries</li>
            <li>Stationery</li>
          </ul>
          <p>
            MTS offers a complete range of services for all types higher quality products with the lowest costs without compromising on quality or service
          </p>
          <p>
            Our domain expertise has enabled us to come with an excellent collection of Saloon Stores Items.
            These items are highly demanded by individuals, crew members and officers on ships. Our items are superior in quality and have longer service life.
            Moreover, we offer these items at highly reasonable prices to the clients. Clients can avali saloon items from us
          </p>
        </div>
      `
    },
  ]
}
