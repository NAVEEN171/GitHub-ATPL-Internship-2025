import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-headlines',
  imports: [CommonModule],
  templateUrl: './news-headlines.html',
  styleUrl: './news-headlines.scss',
})
export class NewsHeadlines {
  newsHeadlines = [
    "A Bangladesh Air Force training aircraft crashed into a school in Dhaka's Uttara area on Monday, leaving at least one person dead and several others injured The jet was identified as an F-7 BGI, which went down on the premises of Milestone School and College while students were present on campus. The crash sent shockwaves through the area, as emergency services rushed to the scene.",
    "Why Bombay HC overturned special court verdict, acquitted all accused in 2006 train blasts case The special court heavily relied on the confessional statements of the accused, and the supporting evidence produced by the prosecution. Over nine years later, the HC discarded the prosecution's case and reversed the trial court's verdict.",
    'Tamil Nadu Chief Minister M K Stalin has been admitted to a corporate hospital in Chennai on Monday after he developed ‘mild giddiness’ during his morning walk, the hospital said.He had mild giddiness during his routine morning walk and has been admitted to the Apollo Hospital, for evaluation of his symptoms. Necessary diagnostic tests are being done, Dr Anil B G, Director Medical Services, said in a statement here.',
  ];
}
