import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const ARRAY = [
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
  {
    title: 'Beach 1',
    url: 'https://media.istockphoto.com/id/656508850/photo/tropical-beach-taken-in-mararikulam.jpg?s=1024x1024&w=is&k=20&c=O63nYTVuF5w_kYfEiJrWOUERmhCcPUWIh6SuiavxPF0=',
  },
  {
    title: 'Beach 2',
    url: 'https://media.istockphoto.com/id/1453360658/photo/maldives-island-beach-during-sunset-sunrise-in-warm-golden-light.webp?b=1&s=170667a&w=0&k=20&c=l3xZkW6se_f49jlAgl90jn-ksSziWSiLRcbpnUijm10=',
  },
  {
    title: 'Beach 3',
    url: 'https://media.istockphoto.com/id/499428778/photo/man-alone-at-beach-with-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=n8SUGaKYpAQyke2rP4uq4E5ZhHgnOyPYcdVFfAk57xQ=',
  },
  {
    title: 'Beach 4',
    url: 'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=170667a&w=0&k=20&c=GOsdloJnf-fcrr-A_Ajsj5KCa2bsnIGOkhDN_nucQsI=',
  },
  {
    title: 'Beach 5',
    url: 'https://media.istockphoto.com/id/1707626329/photo/sunrise-over-a-tropical-beach-with-clouds-and-palm-trees-in-hikkaduwa.webp?b=1&s=170667a&w=0&k=20&c=YhL_AKL2pVrU-i2bFEveIbYy6D4q2nw3OVFXtMrmHzE=',
  },
];

enum PaginatorSwitch {
  NEXT = 'NEXT',
  PREV = 'PREV',
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentPage = 0;
  images = ARRAY;

  onPageNumberClick(pageIdx: number) {
    console.log(pageIdx);
    this.currentPage = pageIdx;
  }

  onSwitch(type: PaginatorSwitch) {
    if (type === PaginatorSwitch.PREV && this.currentPage > 0) {
      this.currentPage -= 1;
    }

    if (
      type === PaginatorSwitch.NEXT &&
      this.currentPage !== this.images.length - 1
    ) {
      this.currentPage += 1;
    }
    console.log(this.currentPage);
  }

  checkWindowIndex(i: number) {
    return Math.abs(this.currentPage - i) < 5;
  }

  get getSwitch() {
    return PaginatorSwitch;
  }
}
