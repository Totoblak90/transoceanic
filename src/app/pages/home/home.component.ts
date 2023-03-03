import { Component } from '@angular/core';
import { HomeGridItem } from '../../interfaces/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeGridItems: HomeGridItem[] = [
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

}
