import { Component, Input } from '@angular/core';
import { EmrAvatarModule, IconComponent } from 'protrack/components';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { Notification } from '@app/header/_notifications/types';

@Component({
  selector: 'app-mentioned-in-comment',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatIcon,
    MatRipple,
    RouterLink,
    IconComponent
  ],
  templateUrl: './mentioned-in-comment.notification.html',
  styleUrl: './mentioned-in-comment.notification.scss'
})
export class MentionedInCommentNotification {
  @Input()
  notification: Notification;
}
