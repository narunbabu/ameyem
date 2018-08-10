import { Component, OnInit } from '@angular/core';
import { Subject } from '../../model/Subject';
import { JsonService } from '../../service/jsonservice';
import { FormControl } from '@angular/forms';
import { Platform } from '@angular/cdk/platform';
// import {PlatformDemo} from '../home/home.component';

@Component({
  selector: 'app-geo-sol',
  templateUrl: './geo-sol.component.html',
  styleUrls: ['./geo-sol.component.css']
})
export class GeoSolComponent implements OnInit {
  subjects: Subject[];
  sub2print: Subject;
  childs: Subject[];
  exec: boolean = false;
  subchilds: Subject[];
  parent: Subject;
  prev_sub_id: number = -1;
  next_sub_id: number = -1;
  index_chi: number;

  // heroes: Hero[];

  // selectedHero: Hero;
  constructor(private subService: JsonService, public platform: Platform) {}

  ngOnInit() {
    this.subService.getSubjects().then(subjects => {
      this.subjects = subjects;
      // console.log(subjects[0]);/
      // subjects.forEach(el=>)
      this.sub2print = subjects[0];
      this.parent = this.sub2print;
      this.childs = this.getChildren(subjects, 0);
      this.exec = true;
    });
  }

  mode = new FormControl('over');
  // childs=this.sub2print.children;

  getChildren(subs: Subject[], ind: number) {
    var num: number = subs[ind].children.length;

    // console.log(parent);
    var subjects: Subject[] = [];

    for (num = 0; num < subs[ind].children.length; num++) {
      // console.log( subs[ subs[ind].children[num]].subject);
      subjects.push(subs[subs[ind].children[num]]);
      //  if (num % 2==0) {
      //     continue
      //  }
      //  count++
    }
    return subjects;
  }

  getArray(N: number) {
    var mynums: number[] = [];
    for (var i = 0; i < N; i++) {
      mynums.push(i);
    }
    // console.log(mynums);
    return mynums;
  }

  // subchilds=
  shouldRun = true;

  onSelect(chi: number): void {
    // console.log(chi);
    // console.log('here ok');
    this.sub2print = this.subjects[chi];
    this.subchilds = this.getChildren(this.subjects, chi);
    // console.log('here second ok');
    // console.log(this.sub2print,chi);
    if (chi != 0) {
      this.parent = this.subjects[this.sub2print.parent];
      // console.log(this.parent.children,chi.id);
      this.index_chi = this.parent.children.indexOf(chi);
    } else {
      this.parent = this.subjects[0];
      this.index_chi = -1;
    }
    // console.log(this.parent,this.parent.children.length,chi);
    // console.log(this.index_chi,this.prev_sub_id,this.next_sub_id);
    if (
      this.index_chi > 0 &&
      this.index_chi < this.parent.children.length - 1
    ) {
      this.prev_sub_id = this.parent.children[this.index_chi - 1];
      this.next_sub_id = this.parent.children[this.index_chi + 1];
    }
    if (this.index_chi == this.parent.children.length - 1) {
      this.prev_sub_id = this.parent.children[this.index_chi - 1];
      this.next_sub_id = -1;
    }
    if (this.index_chi <= 0) {
      this.prev_sub_id = -1;
      this.next_sub_id = this.parent.children[this.index_chi + 1];
    }
    // console.log(this.index_chi,this.prev_sub_id,this.next_sub_id);
  }
}
