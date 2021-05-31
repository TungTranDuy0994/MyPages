import { Injectable } from '@angular/core';
import {Job} from './job';
import {JOBS} from './mock-jobs';
import {Observable, of} from 'rxjs';
import {MesagesService} from './mesages.service';

 
// The Service is now ready to plug into the Job component. 
// Injectable dùng share data cho các component khác 

@Injectable({
  providedIn: 'root'
})
// | 'root' | 'platform' | 'any' |

export class JobService {
  
  // xử lý ko đồng bộ , trong trường hợp call dữ liệu từ server khác và chò kết quả trả về
  getJobs() : Observable<Job[]> {
  	const jobs = of(JOBS);
  	this.mesagesService.add('Jobs is fetched');
  	return jobs;
  }

  constructor(private mesagesService: MesagesService ) { }

}


