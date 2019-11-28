import { Component, OnInit } from '@angular/core';
import { AppflowService } from '../../providers/appflow.service';
import { LogService } from '../../providers/log.service';
import { WalletService } from '../../providers/wallet.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  versionNumber:string;
  constructor(
    private logger: LogService,
    private walletService: WalletService,
    private appflow: AppflowService,
    private translate: TranslateService
  ) {
    this.versionNumber = this.walletService.appVersionString;
  }

  ngOnInit() {
  }

}