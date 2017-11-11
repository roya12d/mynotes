<?php

class m150829_104900_create_issue_user_assignment_table extends CDbMigration
{
	

	
	// Use safeUp/safeDown to do migration with transaction
	public function safeUp()
	{
		$this->createTable('tbl_issue',
	array(
	'id'=>'pk',
	'name'=>'string not null',
	'description'=>'text',
	'project_id'=>'int(11) default null',
	'type_id'=>'int(11) default null',
	'status_id'=>'int(11) default null',
	'owner_id'=>'int(11) default null',
	'requester_id'=>'int(11) default null',
	'create_time'=>'datetime default null',
	'create_user_id'=>'int(11) default null',
	'update_time'=>'datetime default null',
	'update_user_id'=>'int(11) default null',
	),
	'engine=innoDB');
	$this->createTable('tbl_user',
	array(
	'id'=>'pk',
	'username'=>'string not null',
	'email'=>'string not null',
	'password'=>'string not null',
	'last_login_time'=>'datetime default null',
	'create_time'=>'datetime default null',
	'create_user_id'=>'int(11) default null',
	'update_time'=>'datetime default null',
	'update_user_id'=>'int(11) default null',
	
	),
	'ENGINE=InnoDB');
	$this->createTable('tbl_project_user_assignment',
	array(
	'project_id'=>'int(11) not null',
	'user_id'=>'int(11) not null',
	'PRIMARY KEY(`project_id`,`user_id`)',
	
	
	),
	'ENGINE=InnoDB');
	$this->addForeignKey('fk_issue_project','tbl_issue','project_id','tbl_project','id','CASCADE','RESTRICT');
	$this->addForeignKey('fk_issue_owner','tbl_issue','owner_id','tbl_user','id','CASCADE','RESTRICT');
	$this->addForeignKey('fk_issue_requester','tbl_issue','requester_id','tbl_user','id','CASCADE','RESTRICT');
	$this->addForeignKey('fk_project_user','tbl_project_user_assignment','project_id','tbl_project','id','CASCADE','RESTRICT');
	$this->addForeignKey('fk_user_project','tbl_project_user_assignment','user_id','tbl_user','id','CASCADE','RESTRICT');
	}


	public function safeDown()
	{          
		$this->truncateTable('tbl_project_user_assignment');
	$this->dropTable('tbl_project_user_assignment');
            $this->truncateTable('tbl_issue');
       $this->dropTable('tbl_issue');
            $this->truncateTable('tbl_user');
            $this->dropTable('tbl_user');
            
	}
	
}